import { NextApiRequest, NextApiResponse } from "next";
import User from "models/User.model";
import connect from "utils/connectDb";
import { setCookie } from "utils/setCookie";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  // Taking the credentials and verifying
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, error: "Please provide email and password" });

  try {
    // Finding the user
    const user = await User.findOne({ email }).select("+password");

    // Don't let people know whether a certain email exists
    if (!user)
      return res.status(400).json({ success: false, error: "Your email or password is incorrect" });

    // Checking if the account is verified
    if (!user.isVerified)
      return res.status(400).json({ success: false, error: "Your account isn't verified yet" });

    // Comparing the password
    const isMatched = await user.matchPasswords(password);
    if (!isMatched)
      return res.status(400).json({ success: false, error: "Your email or password is incorrect" });

    // Removing password
    const _user = user.toJSON();
    delete _user.password;

    // Success response
    setCookie(res, "token", user.generateAuthToken(), { maxAge: 2 * 24 * 60 * 60 * 1000 });
    return res.status(200).json({ success: true, user: _user });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
