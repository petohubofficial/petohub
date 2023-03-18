import Directory from "models/Directory.model";
import Product from "models/Product.model";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { PaginatedResponse } from "types/common";
import { DirectoriesResponse, Directory as IDirectory, DirectoryResponse } from "types/directory";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<DirectoriesResponse | DirectoryResponse>
) => {
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
        return res.status(200).json({ success: true, data: { directory, products } });
      }
      return res.status(200).json({ success: true, data: { directory } });
    }

    // Getting all approved directories
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
    const directoryQuery = Directory.find({
      isApproved: true,
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
    directoryQuery.populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name profileImage _id" },
    });

    // Sorting the query
    if (sort === "rating") directoryQuery.sort({ averageRating: 1 });
    if (sort === "-rating") directoryQuery.sort({ averageRating: -1 });
    if (sort === "newest") directoryQuery.sort({ createdAt: -1 });
    if (sort === "oldest") directoryQuery.sort({ createdAt: 1 });

    // Pagination
    directoryQuery.skip(startIndex).limit(limit);

    // Executing the query
    const directories = await directoryQuery;

    // Making the results object along with some metadata
    const results: PaginatedResponse<IDirectory> = {
      total: 0,
      pages: 0,
      results: [],
      next: { page: 0, limit: 0 },
      prev: { page: 0, limit: 0 },
    };
    results.total = directories.length;
    results.pages = Math.ceil(results.total / limit);
    results.results = directories;

    // Metadata for next and prev pages
    if (endIndex < results.total) results.next = { page: page + 1, limit: limit };
    if (startIndex > 0) results.prev = { page: page - 1, limit: limit };

    return res.status(200).json({ success: true, data: results });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
