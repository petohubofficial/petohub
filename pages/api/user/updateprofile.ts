import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Directory from "models/Directory.model";
import User from "models/User.model";
import { NextApiResponse } from "next";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (
  req: ProtectedNextApiRequest & MulterNextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "PUT")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    const user = await User.findById(req.user.id).populate("directory");
    // Controlling customer update profile request
    if (req.user.role === Role.CUSTOMER) {
      if (req.body.name) user.name = req.body.name;
      if (req.files) {
        const profileImage = req.files.find((file) => file.fieldname === "profileImage");
        if (profileImage) user.profileImage = `/uploads/${profileImage.filename}`;
      }
      await user.save();
    }
    // Controlling client update profile request
    else if (req.user.role === Role.CLIENT) {
      // Getting the directory profile
      const directory = user.directory;
      // Checking for username
      if (req.body.username) {
        if (await Directory.findOne({ username: req.body.username }))
          return res.status(400).json({ success: false, error: "Username already exists" });
        const lookups = [
          "shop",
          "username",
          "directory",
          "directories",
          "profile",
          "profiles",
          "account",
          "accounts",
          "ngo",
          "ngos",
          "service",
          "services",
          "home",
          "contact",
          "contactus",
          "feedback",
          "help",
          "terms",
          "conditions",
          "donate",
          "product",
          "products",
          "purchase",
          "sell",
          "seller",
          "buyer",
          "purchases",
          "tnc",
          "privacy",
          "policy",
          "privacypolicy",
          "privacy-policy",
          "terms-and-conditions",
          "tnc",
          "api",
        ];
        for (const lookup of lookups) {
          if (req.body.username.toLowerCase().indexOf(lookup) !== -1)
            return res.status(400).json({ success: false, error: "Username not allowed" });
        }
        directory.username = req.body.username;
      }
      // Plain text fields
      if (req.body.name) user.name = req.body.name;
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
      if (req.body.features) directory.features = req.body.features.split(",");
      if (req.body.products) directory.products = req.body.products.split(",");
      if (req.body.services) directory.services = req.body.services.split(",");
      if (req.body.gallery) directory.gallery = req.body.gallery.split(",");
      // Object fields in formdata are in JSON format
      if (req.body.details) directory.details = JSON.parse(req.body.details);
      if (req.body.faq) directory.faq = JSON.parse(req.body.faq);
      if (req.body.location) directory.location = JSON.parse(req.body.location);
      if (req.body.timings) directory.timings = JSON.parse(req.body.timings);
      // Files contain single profileImage and multiple directoryImages files
      if (req.files) {
        const profileImage = req.files.find((file) => file.fieldname === "profileImage");
        if (profileImage) user.profileImage = `/uploads/${profileImage.filename}`;
        // ASSUME: the maximum number of files in request = the number of files user can have at most - the number of files user currently have
        const directoryImages = req.files.filter((file) => file.fieldname === "directoryImages");
        if (directoryImages.length > 0) {
          const newImages = directoryImages.map((image) => `/uploads/${image.filename}`);
          directory.directoryImages = directory.directoryImages.concat(newImages);
        }
      }
      // Manually changing directory images array to remove some previous ones
      if (req.body.directoryImages) directory.directoryImages = req.body.directoryImages.split(",");
      if (req.body.directoryImages === "") directory.directoryImages = [];
      await user.save();
      await directory.save();
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const config = { api: { bodyParser: false } }; // Disallow body parsing, since we're using multer

export default withProtect(withMulter(handler));
