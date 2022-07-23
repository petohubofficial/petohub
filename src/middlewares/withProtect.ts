import jwt from "jsonwebtoken";
import User from "models/User.model";
import { HydratedDocument } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { User as IUser } from "types/user";
import connect from "utils/connectDb";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface ProtectedNextApiRequest extends NextApiRequest {
  user: HydratedDocument<IUser>;
}

const withProtect =
  (handler: Function) => async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
    let token;
    if (req.headers.cookie) {
      const cookies = req.headers.cookie.split(";");
      const cookie = cookies.find((c) => c.trim().startsWith("at="));
      if (cookie) token = cookie.split("=")[1];
    }
    if (!token) return res.status(401).json({ success: false, error: "Unauthorized" });

    try {
      await connect();
      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ success: false, error: "Unauthorized" });
      req.user = user;
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }
  };

export default withProtect;
