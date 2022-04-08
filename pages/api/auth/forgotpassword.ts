import { NextApiRequest, NextApiResponse } from "next";
import User from "models/User.model";
import connect from "utils/connectDb";
import sendEmail from "utils/sendEmail";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  // Verifying email in body
  if (!req.body.email)
    return res.status(400).json({ success: false, error: "Please provide an email" });

  try {
    // Taking the credentials and verifying
    const user = await User.findOne({ email: req.body.email });

    // Don't let people know whether a certain email exists or not
    if (!user) return res.status(400).json({ success: false, error: "The email couldn't be sent" });

    // Generating a reset token
    const token = user.getResetToken();
    await user.save();

    // Generating a reset password url and the email message
    const resetUrl = `${process.env.SITE_URL}/resetpassword?token=${token}`;
    const message = `
            <h1>You have requested to reset your password</h1>
            <p>Please go to this link to reset</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;

    // Sending the email
    try {
      await sendEmail({ to: user.email, subject: "Petohub Password Reset Request", text: message });
      res
        .status(200)
        .json({ success: true, data: "Email for password reset has been sent successfully" });
    } catch (error) {
      // In case of an error, remove the reset password token
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      return res.status(400).json({ success: false, error: "The email couldn't be sent" });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
