import { NextApiResponse } from "next";
import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import User from "models/User";
import connect from "utils/connectDb";
import Directory from "models/Directory";

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
        const users = await User.find().populate("directory");
        return res.status(200).json({
          success: true,
          users,
        });
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
      if (req.body.role === "Client") {
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

      res.status(200).json({
        success: true,
        user,
      });
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
          user.role = "Customer";
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
          user.role = "Client";
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
      return res.status(200).json({
        success: true,
        user,
      });
    }

    // Deleting a user
    else if (req.method === "DELETE") {
      const user = await User.findByIdAndDelete(req.query.id);
      return res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    // Handling errors
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since we're using multer
  },
};

export default withProtect(withRoles("Admin")(withMulter(handler)));
