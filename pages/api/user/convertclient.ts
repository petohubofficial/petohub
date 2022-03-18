import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Directory from "models/Directory";
import connect from "utils/connectDb";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Chceking if user is a client
  if (req.user.role === "Client") return res.status(200).json({ success: true, user: req.user });

  await connect();
  try {
    // Handling directory creation and updating user object
    const directory = await Directory.create({
      email: req.user.email,
      user: req.user._id,
      number: req.body?.number,
      storeName: req.body?.storeName,
      category: req.body?.category,
      address: req.body?.address,
      city: req.body?.city,
      state: req.body?.state,
      pincode: req.body?.state,
    });

    // Updating user data and saving
    req.user.directory = directory._id;
    req.user.role = "Client";
    await req.user.save();

    return res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    // Handling errors
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default withProtect(handler);
