import { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import Directory from "models/Directory";
import sendEmail from "utils/sendEmail";
import connect from "utils/connectDb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  try {
    // Taking the credentials and verifying
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ success: false, error: "Please provide email, name and password" });

    // Checking if the user already exists
    if (await User.findOne({ email }))
      return res.status(400).json({ success: false, error: "User already exists" });

    // Handling client registeration
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
    // Customer registration
    else user = await User.create({ name, email, password });

    // Generating a verification token
    const verificationToken = user.getVerificationToken();
    await user.save();

    // Generating a verification url and message
    const verifyUrl = `${process.env.SITE_URL}/verify?token=${verificationToken}`;
    const message = `
            <h1>Petohub account verification</h1>
            <p>Please go to this link to verify your account</p>
            <a href=${verifyUrl} clicktracking=off>${verifyUrl}</a>
        `;

    // Sending the email
    try {
      await sendEmail({ to: user.email, subject: "Petohub Account Verification", text: message });
      return res
        .status(200)
        .json({ success: true, data: "Email for account verification has been sent successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Email sending failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default handler;
