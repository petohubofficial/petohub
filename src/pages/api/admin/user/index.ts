import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import Directory from "models/Directory.model";
import User from "models/User.model";
import { NextApiResponse } from "next";
import { GetUsersResponse, PaginatedResponse, Role } from "types/user";
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
    // Get users
    if (req.method === "GET") {
      // Get user by ID
      if (req.query.id) {
        const user = await User.findById(req.query.id);
        if (!user) return res.status(404).json({ success: false, error: "User not found" });
        return res.status(200).json({ success: true, user });
      }
      // Get all users
      else {
        const page = parseInt(req.query.page as string) || 1;
        const limit = Math.min(parseInt(req.query.limit as string) || 20, 20);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const usersQuery = User.find().populate("directory");
        usersQuery.skip(startIndex).limit(limit);

        const users = await usersQuery;
        const results: PaginatedResponse = {
          total: 0,
          pages: 0,
          results: [],
          next: { page: 0, limit: 0 },
          prev: { page: 0, limit: 0 },
        };

        results.total = await User.countDocuments();
        results.pages = Math.ceil(results.total / limit);
        results.results = users;

        if (endIndex < results.total) results.next = { page: page + 1, limit: limit };
        if (startIndex > 0) results.prev = { page: page - 1, limit: limit };

        return (res as NextApiResponse<GetUsersResponse>)
          .status(200)
          .json({ success: true, data: results });
      }
    }

    // Adding a new user
    else if (req.method === "POST") {
      // Checking if required fields are passed
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return res.status(400).json({ success: false, error: "Please provide all fields" });

      // Checking if a user already exists with that email
      if (await User.findOne({ email }))
        return res.status(400).json({ success: false, error: "User already exists" });

      // Handling client registration
      let user;
      if (req.body.role === Role.CLIENT) {
        // Creating new directory profile
        const directory = await Directory.create({
          email,
          number: req.body?.number,
          storeName: req.body?.storeName,
          category: req.body?.category,
          address: req.body?.address,
          city: req.body?.city,
          state: req.body?.state,
          pincode: req.body?.pincode,
        });
        // Creating new user profile along with directory id
        user = await User.create({
          name,
          email,
          password,
          number: req.body?.number,
          role: req.body.role,
          directory: directory._id,
        });
        // Adding user object ref to directory object
        directory.user = user._id;
        directory.save();
      }
      // Other roles registration
      else
        user = await User.create({
          name,
          email,
          password,
          number: req.body?.number,
          role: req.body?.role,
        });

      res.status(200).json({ success: true, user });
    }

    // Updating user
    else if (req.method === "PUT") {
      // Checking if the user exists
      const user = await User.findById(req.query.id).populate("directory");
      if (!user) return res.status(404).json({ success: false, error: "User not found" });

      // Updating fields
      if (req.body.name) user.name = req.body.name;
      if (req.body.email) user.email = req.body.email;
      if (req.body.password) user.password = req.body.password;
      if (req.body.role) user.role = req.body.role;
      if (req.body.number) user.number = req.body.number;
      if (req.body.directory !== undefined) {
        // Removing directory from user
        if (req.body.directory === "") {
          user.directory.user = null;
          await user.directory.save();
          user.directory = null;
          user.role = Role.CUSTOMER;
        }
        // Adding or updating directory of user
        else {
          const directory = await Directory.findById(req.body.directory);
          if (!directory)
            return res.status(404).json({ success: false, error: "Directory not found" });
          if (directory.user)
            return res
              .status(400)
              .json({ success: false, error: "Directory already assigned to another user" });
          user.directory = req.body.directory;
          user.role = Role.CLIENT;
          directory.user = user._id;
          await directory.save();
        }
      }
      if (req.files)
        user.profileImage = `/uploads/${
          req.files.find((file) => file.fieldname === "profileImage")?.filename
        }`;

      // Saving and returning the user
      await user.save();
      return res.status(200).json({ success: true, user });
    }

    // Deleting a user
    else if (req.method === "DELETE") {
      const user = await User.findByIdAndDelete(req.query.id);
      return res.status(200).json({ success: true, user });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export const config = { api: { bodyParser: false } }; // Disallow body parsing, since we're using multer

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(withMulter(handler)));
