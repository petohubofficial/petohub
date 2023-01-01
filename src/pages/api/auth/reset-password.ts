import crypto from "crypto";
import User from "models/User.model";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  // Verifying token in query
  if (!req.query.token)
    return res.status(400).json({ success: false, error: "Please provide a token" });

  // Verifying password in body
  if (!req.body.password)
    return res.status(400).json({ success: false, error: "Please provide a password" });

  // Hashing the token
  const token = crypto
    .createHash("sha256")
    .update(req.query.token as string)
    .digest("hex");

  try {
    // Finding the user
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ success: false, error: "Invalid token" });

    // Resetting the password and saving changes
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    return res.status(200).json({ success: true, data: "Password resetted successfully" });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
