import { NextApiResponse } from "next";
import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import connect from "utils/connectDb";
import Product from "models/Product";
import Edit from "models/Edit";
import Directory from "models/Directory";

const handler = async (
  req: ProtectedNextApiRequest & MulterNextApiRequest,
  res: NextApiResponse
) => {
  const allowed = ["GET", "POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Get products
    if (req.method === "GET") {
      // Get a single product
      if (req.query.id) {
        const product = await Product.findById(req.query.id);
        if (!product) return res.status(404).json({ success: false, error: "Product not found" });
        return res.status(200).json({ success: true, product });
      }
      // Get all products
      else {
        const products = await Product.find();
        return res.status(200).json({ success: true, products });
      }
    }

    // Adding a new product
    else if (req.method === "POST") {
      const product = await Product.create({
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        petType: req.body.petType?.split(","),
        keywords: req.body.keywords ? req.body.keywords?.split(",") : [],
        breedType: req.body.breedType,
        description: req.body.description,
        weight: req.body.weight,
        size: JSON.parse(req.body.size || "{}"),
        countInStock: req.body.countInStock,
        price: req.body.price,
        isVeg: req.body.isVeg,
        ageRange: JSON.parse(req.body.ageRange || "{}"),
        affiliateLinks: JSON.parse(req.body.affiliateLinks || "{}"),
        productImages: req.body.productImages?.split(","),
      });

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

      // Manually populating edits and lastEdit
      product.lastEdit = await Edit.findById(product.lastEdit).populate("user");
      product.edits = await Edit.find({ product: product._id }).sort({ date: -1 }).populate("user");

      res.status(200).json({ success: true, product });
    }

    // Updating product
    else if (req.method === "PUT") {
      // Check if the product exists
      const product = await Product.findById(req.query.id).select("+edits");
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });

      // Check if the seller ref is passed
      if (req.body.seller !== undefined) {
        // To remove the seller ref
        if (req.body.seller === "") product.seller = null;
        // To add or update the seller ref
        else {
          if (!(await Directory.findById(req.body.seller)))
            return res.status(404).json({ success: false, error: "Directory not found" });
          product.seller = req.body.seller;
        }
      }

      // Updating the product
      if (req.body.name) product.name = req.body.name;
      if (req.body.brand) product.brand = req.body.brand;
      if (req.body.category) product.category = req.body.category;
      if (req.body.petType) product.petType = req.body.petType.split(",");
      if (req.body.keywords) product.keywords = req.body.keywords.split(",");
      if (req.body.breedType) product.breedType = req.body.breedType;
      if (req.body.description) product.description = req.body.description;
      if (req.body.weight) product.weight = req.body.weight;
      if (req.body.size) product.size = JSON.parse(req.body.size);
      if (req.body.countInStock) product.countInStock = req.body.countInStock;
      if (req.body.price) product.price = req.body.price;
      if (req.body.isVeg) product.isVeg = req.body.isVeg;
      if (req.body.ageRange) product.ageRange = JSON.parse(req.body.ageRange);
      if (req.body.affiliateLinks) product.affiliateLinks = JSON.parse(req.body.affiliateLinks);
      if (req.files) {
        const productImages = req.files.filter((file) => file.fieldname === "productImages");
        if (productImages.length > 0) {
          const newImages = productImages.map((image) => `/uploads/${image.filename}`);
          product.productImages = product.productImages.concat(newImages);
        }
      }
      if (req.body.productImages) product.productImages = req.body.productImages.split(",");
      if (req.body.productImages === "") product.productImages = [];

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

      // Manually populating edits and lastEdit
      product.lastEdit = await Edit.findById(product.lastEdit).populate("user");
      product.edits = await Edit.find({ product: product._id }).sort({ date: -1 }).populate("user");

      // Returning the updated product
      return res.status(200).json({ success: true, product });
    }

    // Deleting a product
    else if (req.method === "DELETE") {
      // Check if the product exists
      const product = await Product.findById(req.query.id);
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });

      // Delete the product
      await product.remove();
      return res.status(200).json({ success: true, product });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export const config = { api: { bodyParser: false } }; // Disallow body parsing, since we're using multer

export default withProtect(withRoles("Admin", "Product Admin")(withMulter(handler)));
