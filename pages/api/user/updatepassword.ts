import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import User from "models/User.model";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Verifying request body
  if (!req.body.newPassword || !req.body.oldPassword)
    return res
      .status(400)
      .json({ success: false, error: "Please provide new password and old password" });

  if (req.body.newPassword !== req.body.oldPassword)
    return res
      .status(400)
      .json({ success: false, error: "New password and old password should be same" });

  await connect();
  try {
    // Finding the user
    const user = await User.findById(req.user.id).select("+password");

    // Comparing the password
    const isMatched = await user.matchPasswords(req.body.oldPassword);
    if (!isMatched) return res.status(400).json({ success: false, error: "Incorrect password" });

    // Updating the password
    user.password = req.body.newPassword;
    await user.save();

    return res.status(200).json({ success: true, user });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(handler);
