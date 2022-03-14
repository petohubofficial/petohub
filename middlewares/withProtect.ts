import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import User from "models/User";
import connect from "utils/connectDb";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface ProtectedNextApiRequest extends NextApiRequest {
  user: any;
}

const withProtect =
  (handler: Function) => async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
      token = req.headers.authorization.split(" ")[1];
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
