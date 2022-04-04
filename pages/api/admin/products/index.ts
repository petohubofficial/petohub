import { NextApiResponse } from "next";
import withMulter, { MulterNextApiRequest } from "middlewares/withMulter";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import connect from "utils/connectDb";
import Product from "models/Product";
import Edit from "models/Edit";
import Directory from "models/Directory";
import { PaginatedResponse } from "types/product";

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
        const page = parseInt(req.query.page as string) || 1;
        const limit = Math.min(parseInt(req.query.limit as string) || 20, 20);
        const query = (req.query.q as string) || "";
        const sort = (req.query.sort as string) || "";
        const category = (req.query.category as string) || "";
        const pet = (req.query.pet as string) || "";
        const brand = (req.query.brand as string) || "";
        const min = parseInt(req.query.min as string) || 0;
        const max = parseInt(req.query.max as string) || Number.MAX_SAFE_INTEGER;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // Building the query
        const productQuery = Product.find({
          $and: [
            { name: { $regex: query, $options: "i" } },
            { category: { $regex: category, $options: "i" } },
            { brand: { $regex: brand, $options: "i" } },
            { petType: { $regex: pet, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { price: { $gte: min, $lte: max } },
          ],
        });

        // Populating reviews
        productQuery.populate({
          path: "reviews",
          populate: { path: "reviewer", select: "name profileImage _id" },
        });

        // Sorting the query
        if (sort === "price") productQuery.sort({ price: -1 });
        if (sort === "-price") productQuery.sort({ price: 1 });
        if (sort === "rating") productQuery.sort({ averageRating: 1 });
        if (sort === "-rating") productQuery.sort({ averageRating: -1 });
        if (sort === "newest") productQuery.sort({ createdAt: -1 });
        if (sort === "oldest") productQuery.sort({ createdAt: 1 });

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

        return res.status(200).json({ success: true, data: results });
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
