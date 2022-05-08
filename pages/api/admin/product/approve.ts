import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import connect from "utils/connectDb";
import Product from "models/Product.model";
import Edit from "models/Edit.model";
import errorHandler from "utils/errorHandler";
import { Role } from "types/user";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking the body
  if (!req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a product id" });

  await connect();
  try {
    const product = await Product.findById(req.query.id).select("+edits +lastEdit");
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    // Manually populating edits and lastEdit
    product.lastEdit = await Edit.findById(product.lastEdit).populate("user");
    product.edits = await Edit.find({ product: product._id }).sort({ date: -1 }).populate("user");

    product.isApproved = true;
    product.approvedAt = Date.now();
    await product.save();
    return res.status(200).json({ success: true, product });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(handler));
