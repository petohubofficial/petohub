import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import User from "models/User.model";
import { NextApiResponse } from "next";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking the body
  if (!req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a user id" });

  await connect();
  try {
    // Checking if the user exists
    const user = await User.findById(req.query.id);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    // Checking if the user is already verified
    if (user.isVerified)
      return res.status(400).json({ success: false, error: "User is already verified" });

    // Verifying the user
    user.isVerified = true;
    user.verifiedAt = Date.now();
    await user.save();

    return res.status(200).json({ success: true, user });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(handler));
