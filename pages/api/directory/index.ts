import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import Directory from "models/Directory.model";
import Product from "models/Product.model";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Getting a directory by username
    if (req.query.username) {
      const directory = await Directory.findOne({
        isApproved: true,
        username: req.query.username,
      }).populate({ path: "reviews", populate: { path: "reviewer", select: "name profileImage" } });
      if (!directory) return res.status(404).json({ success: false, error: "Directory not found" });

      if (req.query.get === "products") {
        const products = await Product.find({
          isApproved: true,
          seller: directory.id,
        });
        return res.status(200).json({ success: true, directory, products });
      }
      return res.status(200).json({ success: true, directory });
    }

    // Getting all approved directories
    const directories = await Directory.find({ isApproved: true }).populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name profileImage" },
    });
    return res.status(200).json({ success: true, directories });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
