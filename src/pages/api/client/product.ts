import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import Edit from "models/Edit.model";
import Product from "models/Product.model";
import { NextApiResponse } from "next";
import { AddProductResponse, GetProductsResponse, PaginatedResponse } from "types/product";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";
import parseFormData from "utils/parseFormData";

const handler = async (
  req: ProtectedNextApiRequest & MulterNextApiRequest,
  res: NextApiResponse
) => {
  const allowed = ["GET", "POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Get own products
    if (req.method === "GET") {
      // Get a single product
      if (req.query.id) {
        const product = await Product.findById(req.query.id)
          .where("seller")
          .equals(req.user.directory);
        if (!product) return res.status(404).json({ success: false, error: "Product not found" });
        return res.status(200).json({ success: true, product });
      }
      // Get all products
      const page = parseInt(req.query.page as string) || 1;
      const limit = Math.min(parseInt(req.query.limit as string) || 20, 20);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const productQuery = Product.find({ seller: req.user.directory });
      // Pagination
      productQuery.skip(startIndex).limit(limit);

      // Executing the query
      const products = await productQuery;
      // Making the results object along with some metadata
      const results: PaginatedResponse = {
        total: 0,
        pages: 0,
        results: [],
        next: { page: 0, limit: 0 },
        prev: { page: 0, limit: 0 },
      };
      results.total = products.length;
      results.pages = Math.ceil(results.total / limit);
      results.results = products;

      // Metadata for next and prev pages
      if (endIndex < results.total) results.next = { page: page + 1, limit: limit };
      if (startIndex > 0) results.prev = { page: page - 1, limit: limit };

      return (res as NextApiResponse<GetProductsResponse>)
        .status(200)
        .json({ success: true, data: results });
    }

    // Adding a new product
    else if (req.method === "POST") {
      const request = parseFormData(req.body, {
        objects: ["affiliateLinks", "productImages", "size", "ageRange", "petType", "keywords"],
      });
      const product = await Product.create(request);

      if (req.files) {
        const productImages = req.files.filter((file) => file.fieldname === "productImages");
        if (productImages.length > 0) {
          const newImages = productImages.map((image) => `/uploads/${image.filename}`);
          product.productImages = product.productImages.concat(newImages);
        }
      }

      // Tracking edits
      const edit = await Edit.create({
        user: req.user._id,
        product: product._id,
        date: Date.now(),
        changes: req.body,
      });
      product.lastEdit = edit._id;
      product.edits.unshift(edit._id);
      await product.save();

      return (res as NextApiResponse<AddProductResponse>)
        .status(200)
        .json({ success: true, product });
    }

    // Updating product
    else if (req.method === "PUT") {
      // Check if the product exists
      const product = await Product.findById(req.query.id).select("+edits");
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });

      // Check if the current user is editing a non-seller product
      if (!product.seller)
        return res.status(400).json({ success: false, error: "Unable to edit this product" });

      // Check if the current user is the seller of that product
      if (product.seller.toString() !== req.user.directory?.toString())
        return res.status(400).json({ success: false, error: "Unable to edit this product" });

      // Updating the product
      const request = parseFormData(req.body, {
        objects: ["affiliateLinks", "productImages", "size", "ageRange", "petType", "keywords"],
      });
      await Product.findByIdAndUpdate(req.query.id, request, { new: true, runValidators: true });

      if (req.files) {
        const productImages = req.files.filter((file) => file.fieldname === "productImages");
        if (productImages.length > 0) {
          const newImages = productImages.map((image) => `/uploads/${image.filename}`);
          product.productImages = product.productImages.concat(newImages);
        }
      }

      // Tracking edits
      const edit = await Edit.create({
        user: req.user._id,
        product: product._id,
        date: Date.now(),
        changes: req.body,
      });
      product.lastEdit = edit._id;
      product.edits.unshift(edit._id);
      await product.save();

      // Returning the updated product
      return res.status(200).json({ success: true, product });
    }

    // Deleting a product
    else if (req.method === "DELETE") {
      // Check if the product exists
      const product = await Product.findById(req.query.id);
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });

      // Check if the current user is removing a non-seller product
      if (!product.seller)
        return res.status(400).json({ success: false, error: "Unable to remove this product" });

      // Check if the current user is the seller of that product or an admin
      if (product.seller.toString() != req.user.directory?.toString())
        return res.status(400).json({ success: false, error: "Unable to remove this product" });

      // Delete the product
      await product.remove();
      return res.status(200).json({ success: true, product });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export const config = { api: { bodyParser: false } }; // Disallow body parsing, since we're using multer

export default withProtect(withRoles(Role.CLIENT)(withMulter(handler)));
