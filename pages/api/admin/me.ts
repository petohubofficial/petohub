import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import User from "models/User";
import connect from "utils/connectDb";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    const user = await User.findById(req.user.id);
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

export default withProtect(withRoles("Admin")(handler));
