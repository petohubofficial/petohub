import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import setCookie from "utils/setCookie";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  try {
    // Logging out the user by setting the cookie to null
    setCookie(res, "at", null, {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: -1,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
