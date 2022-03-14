import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import User from "models/User";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  try {
    // Populating the directrory object
    const user = await User.findById(req.user.id).populate("directory");
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    // Handling errors
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

export default withProtect(handler);
