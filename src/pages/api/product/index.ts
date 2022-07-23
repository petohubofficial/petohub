import Product from "models/Product.model";
import { NextApiRequest, NextApiResponse } from "next";
import { PaginatedResponse } from "types/product";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Getting a single product by id
    if (req.query.id) {
      const product = await Product.find({ id: req.query.id, isApproved: true })
        .populate({ path: "reviews", populate: { path: "reviewer", select: "name profileImage" } })
        .populate({
          path: "questions",
          populate: { path: "askedBy answers.answeredBy", select: "name profileImage" },
        });
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });
      return res.status(200).json({ success: true, product });
    }

    // Getting all products
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

    // Selecting only approved products
    productQuery.where("isApproved").equals(true);

    // Populating reviews
    productQuery.populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name profileImage" },
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
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
