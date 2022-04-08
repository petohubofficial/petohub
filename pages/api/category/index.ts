import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import Category from "models/Category.model";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Getting a single category by id
    if (req.query.id) {
      const category = await Category.findById(req.query.id).populate("docs");
      if (!category) return res.status(404).json({ success: false, error: "Category not found" });
      return res.status(200).json({ success: true, category });
    }
    // Getting all categories
    const categories = await Category.find().populate("docs");
    return res.status(200).json({ success: true, categories });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
