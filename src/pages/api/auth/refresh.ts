import jwt from "jsonwebtoken";
import User from "models/User.model";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";
import setCookie from "utils/setCookie";

const NODE_ENV = process.env.NODE_ENV as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  // Checking for Refresh Token in request body
  const { rt } = req.body;
  if (!rt) return res.status(400).json({ success: false, error: "Please provide refresh token" });

  try {
    // Finding the user
    const decoded = jwt.verify(rt, process.env.JWT_SECRET as string) as { id: string };
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ success: false, error: "Unauthorized" });

    // Setting the Access Token in the cookie
    setCookie(res, "at", user.generateAccessToken(), {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: NODE_ENV === "production",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    // Success response
    return res.status(200).json({ success: true, rt: user.generateRefreshToken() });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
