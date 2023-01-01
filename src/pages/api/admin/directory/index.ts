import { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import Directory from "models/Directory.model";
import User from "models/User.model";
import { NextApiResponse } from "next";
import { PaginatedResponse } from "types/common";
import { Directory as IDirectory } from "types/directory";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (
  req: ProtectedNextApiRequest & MulterNextApiRequest,
  res: NextApiResponse
) => {
  const allowed = ["GET", "POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Get directories
    if (req.method === "GET") {
      // Get a single directory
      if (req.query.id) {
        const directory = await Directory.findById(req.query.id).select("+user").populate("user");
        if (!directory)
          return res.status(404).json({ success: false, error: "Directory not found" });
        return res.status(200).json({ success: true, directory });
      }
      // Get all directories
      else {
        const page = parseInt(req.query.page as string) || 1;
        const limit = Math.min(parseInt(req.query.limit as string) || 20, 20);
        const query = (req.query.q as string) || "";
        const sort = (req.query.sort as string) || "";
        const category = (req.query.category as string) || "";
        const pet = (req.query.pet as string) || "";
        const brand = (req.query.brand as string) || "";
        const min = parseInt(req.query.min as string) || 0;
        const max = parseInt(req.query.max as string) || Number.MAX_SAFE_INTEGER;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // Building the query
        const directoryQuery = Directory.find({
          $and: [
            { name: { $regex: query, $options: "i" } },
            { category: { $regex: category, $options: "i" } },
            { brand: { $regex: brand, $options: "i" } },
            { petType: { $regex: pet, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { price: { $gte: min, $lte: max } },
          ],
        });

        // Populating reviews and users
        directoryQuery
          .select("+user")
          .populate("user")
          .populate({
            path: "reviews",
            populate: { path: "reviewer", select: "name profileImage _id" },
          });

        // Sorting the query
        if (sort === "rating") directoryQuery.sort({ averageRating: 1 });
        if (sort === "-rating") directoryQuery.sort({ averageRating: -1 });
        if (sort === "newest") directoryQuery.sort({ createdAt: -1 });
        if (sort === "oldest") directoryQuery.sort({ createdAt: 1 });

        // Pagination
        directoryQuery.skip(startIndex).limit(limit);

        // Executing the query
        const directories = await directoryQuery;

        // Making the results object along with some metadata
        const results: PaginatedResponse<IDirectory> = {
          total: 0,
          pages: 0,
          results: [],
          next: { page: 0, limit: 0 },
          prev: { page: 0, limit: 0 },
        };
        results.total = directories.length;
        results.pages = Math.ceil(results.total / limit);
        results.results = directories;

        // Metadata for next and prev pages
        if (endIndex < results.total) results.next = { page: page + 1, limit: limit };
        if (startIndex > 0) results.prev = { page: page - 1, limit: limit };

        return res.status(200).json({ success: true, data: results });
      }
    }

    // Adding a new directory
    else if (req.method === "POST") {
      // Checking if the directory is being linked to an existing user
      let user, link;
      if (req.body.user && req.body.user !== "") {
        user = await User.findById(req.body.user);
        if (!user) return res.status(404).json({ success: false, error: "User not found" });
        if (user.directory)
          return res.status(400).json({ success: false, error: "User is already a client" });
        link = true;
      }

      // Creating the directory
      const directory = await Directory.create({
        storeName: req.body?.storeName,
        email: req.body?.email,
        address: req.body?.address,
        category: req.body?.category,
        state: req.body?.state,
        city: req.body?.city,
        pincode: req.body?.pincode,
        number: req.body?.number,
      });

      // Adding refs to directory and user
      if (link) {
        directory.user = req.body.user;
        user.directory = directory._id;
        if (user.role === Role.CUSTOMER) user.role = Role.CLIENT;
        await directory.save();
        await user.save();
        directory.user = user;
      }
      return res.status(200).json({ success: true, directory });
    }

    // Updating directory
    else if (req.method === "PUT") {
      // Checking if the directory exists
      const directory = await Directory.findById(req.query.id).select("+user").populate("user");
      if (!directory) return res.status(404).json({ success: false, error: "Directory not found" });

      // If user ref is passed
      if (req.body.user !== undefined) {
        // Removing user from directory
        if (req.body.user === "") {
          if (directory.user !== null) {
            directory.user.directory = null;
            directory.user.role = Role.CUSTOMER;
            await directory.user.save();
            directory.user = null;
          }
        }
        // Adding or updating user of directory
        else {
          const user = await User.findById(req.body.user);
          if (!user) return res.status(404).json({ success: false, error: "User not found" });
          if (user.directory)
            return res.status(400).json({ success: false, error: "User is already a client" });
          user.directory = directory._id;
          user.role = Role.CLIENT;
          await user.save();
          directory.user = user._id;
        }
      }
      // Updating field
      if (req.body.username) directory.username = req.body.username;
      if (req.body.storeName) directory.storeName = req.body.storeName;
      if (req.body.number) directory.number = req.body.number;
      if (req.body.address) directory.address = req.body.address;
      if (req.body.city) directory.city = req.body.city;
      if (req.body.state) directory.state = req.body.state;
      if (req.body.pincode) directory.pincode = req.body.pincode;
      if (req.body.description) directory.description = req.body.description;
      if (req.body.website) directory.website = req.body.website;
      if (req.body.tagline) directory.tagline = req.body.tagline;
      // Array fields in formdata are seperated by commas
      if (req.body.category) directory.category = req.body.category.split(",");
      if (req.body.category === "") directory.category = [];
      if (req.body.features) directory.features = req.body.features.split(",");
      if (req.body.features === "") directory.features = [];
      if (req.body.products) directory.products = req.body.products.split(",");
      if (req.body.products === "") directory.products = [];
      if (req.body.services) directory.services = req.body.services.split(",");
      if (req.body.services === "") directory.services = [];
      if (req.body.gallery) directory.gallery = req.body.gallery.split(",");
      if (req.body.gallery === "") directory.gallery = [];
      // Object fields in formdata are in JSON format
      if (req.body.details) directory.details = JSON.parse(req.body.details);
      if (req.body.faq) directory.faq = JSON.parse(req.body.faq);
      if (req.body.location) directory.location = JSON.parse(req.body.location);
      if (req.body.timings) directory.timings = JSON.parse(req.body.timings);
      // Files contain directoryImages
      if (req.files) {
        const directoryImages = req.files.filter((file) => file.fieldname === "directoryImages");
        if (directoryImages.length > 0) {
          const newImages = directoryImages.map((image) => `/uploads/${image.filename}`);
          directory.directoryImages = directory.directoryImages.concat(newImages);
        }
      }
      // Manually changing directory images array to remove some previous ones
      if (req.body.directoryImages) directory.directoryImages = req.body.directoryImages.split(",");
      if (req.body.directoryImages === "") directory.directoryImages = [];
      await directory.save();

      return res.status(200).json({ success: true, directory });
    }

    // Deleting a directory
    else if (req.method === "DELETE") {
      // Check if the directory exists
      const directory = await Directory.findById(req.query.id).select("+user").populate("user");
      if (!directory) return res.status(404).json({ success: false, error: "Directory not found" });

      // Removing directory reference from the linked user
      if (directory.user?.directory) {
        delete directory.user.directory;
        directory.user.role = Role.CUSTOMER;
        await directory.user.save();
      }

      // Delete the directory
      await directory.remove();
      return res.status(200).json({ success: true, directory });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export const config = { api: { bodyParser: false } }; // Disallow body parsing, since we're using multer

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(handler));
