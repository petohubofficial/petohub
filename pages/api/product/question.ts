import { NextApiResponse } from "next";
import Product from "models/Product";
import connect from "utils/connectDb";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Question from "models/Question";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST" && req.method !== "DELETE")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking if id is passed
  if (!req.query.id) return res.status(400).json({ success: false, error: "Provide a product id" });

  // Checking the body
  if (req.method === "POST" && !req.body.question)
    return res.status(400).json({ success: false, error: "Provide all required fields" });

  await connect();
  try {
    // Checking if the product exists
    const product = await Product.findById(req.query.id).where("isApproved").equals(true);
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    const askedBy = req.user._id;

    // Post a question
    if (req.method === "POST") {
      // Checking if the user has already questioned the product
      if (await Question.findOne({ askedBy, product: product._id }))
        return res
          .status(400)
          .json({ success: false, error: "You have already questioned the prouct" });

      // Creating a question and sending it back
      const question = await Question.create({
        askedBy,
        product: product._id,
        question: req.body.question,
      });
      await question.populate("askedBy");
      return res.status(200).json({ success: true, question });
    }
    // Delete a question
    else if (req.method === "DELETE") {
      // Checking if the user already posed a question on product
      const question = await Question.findOne({ askedBy, product: product._id });
      if (!question)
        return res.status(400).json({ success: false, error: "You have not reviewed the product" });

      // Removing the question and returning it
      await question.remove();
      return res.status(200).json({ success: true, question });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default withProtect(handler);
