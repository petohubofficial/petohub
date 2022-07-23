import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Directory from "models/Directory.model";
import Review from "models/Review.model";
import { NextApiResponse } from "next";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST" && req.method !== "DELETE")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking if username is passed
  if (!req.query.username)
    return res.status(400).json({ success: false, error: "Provide a directory id" });

  // Checking the body
  if (req.method === "POST" && (!req.body.subject || !req.body.comment || !req.body.rating))
    return res.status(400).json({ success: false, error: "Provide all required fields" });

  await connect();
  try {
    // Checking if the directory exists
    const directory = await Directory.findOne({ isApproved: true, username: req.query.username });
    if (!directory) return res.status(404).json({ success: false, error: "Directory not found" });

    const reviewer = req.user._id;
    const revieweeId = req.query.id;

    // Post a review
    if (req.method === "POST") {
      // Checking if the user has already reviewed the directory
      if (await Review.findOne({ reviewer, revieweeId }))
        return res
          .status(400)
          .json({ success: false, error: "You have already reviewed the directory" });

      // Creating the review and sending it
      const review = await Review.create({
        reviewer,
        revieweeId,
        revieweeModel: "Directory",
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
        return res
          .status(400)
          .json({ success: false, error: "You have not reviewed the directory" });

      // Removing the review and returning it
      await review.remove();
      return res.status(200).json({ success: true, review });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(handler);
