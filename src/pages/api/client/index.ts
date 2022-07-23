import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import User from "models/User.model";
import { NextApiResponse } from "next";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    const user = await User.findById(req.user._id).populate("directory");
    return res.status(200).json({ success: true, user });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(withRoles(Role.CLIENT)(handler));
