import { NextApiResponse } from "next";
import Product from "models/Product";
import connect from "utils/connectDb";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Review from "models/Review";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST" && req.method !== "DELETE")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking if id is passed
  if (!req.query.id) return res.status(400).json({ success: false, error: "Provide a product id" });

  // Checking the body
  if (req.method === "POST" && (!req.body.subject || !req.body.comment || !req.body.rating))
    return res.status(400).json({ success: false, error: "Provide all required fields" });

  await connect();
  try {
    // Checking if the product exists
    const product = await Product.findById(req.query.id).where("isApproved").equals(true);
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    const reviewer = req.user._id;
    const revieweeId = req.query.id;

    // Post a review
    if (req.method === "POST") {
      // Checking if the user has already reviewed the product
      if (await Review.findOne({ reviewer, revieweeId }))
        return res
          .status(400)
          .json({ success: false, error: "You have already reviewed the product" });

      // Creating the review and sending it
      const review = await Review.create({
        reviewer,
        revieweeId,
        revieweeModel: "Product",
        subject: req.body.subject,
        comment: req.body.comment,
        rating: req.body.rating,
      });
      await review.populate("reviewer");
      return res.status(200).json({ success: true, review });
    }
    // Delete a review
    else if (req.method === "DELETE") {
      // Checking if the user has reviewed
      const review = await Review.findOne({ reviewer, revieweeId });
      if (!review)
        return res.status(400).json({ success: false, error: "You have not reviewed the product" });

      // Removing the review and returning it
      await review.remove();
      return res.status(200).json({ success: true, review });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default withProtect(handler);
