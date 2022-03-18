import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import Brand from "models/Brand";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Getting a single brand by id
    if (req.query.id) {
      const brand = await Brand.findById(req.query.id).populate("products").populate("sellers");
      if (!brand) return res.status(404).json({ success: false, error: "Brand not found" });
      return res.status(200).json({ success: true, brand });
    }
    // Getting all brands
    const brands = await Brand.find().populate("products").populate("sellers");
    return res.status(200).json({ success: true, brands });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default handler;
