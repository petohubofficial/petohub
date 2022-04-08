import { NextApiResponse } from "next";
import Product from "models/Product.model";
import connect from "utils/connectDb";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import Question from "models/Question.model";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST" && req.method !== "DELETE")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking if id is passed
  if (!req.query.id) return res.status(400).json({ success: false, error: "Provide a product id" });
  if (!req.query.qid)
    return res.status(400).json({ success: false, error: "Provide a question id" });

  // Checking the body
  if (req.method === "POST" && !req.body.answer)
    return res.status(400).json({ success: false, error: "Provide all required fields" });

  await connect();
  try {
    // Checking if the product exists
    const product = await Product.findById(req.query.id).where("isApproved").equals(true);
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    // Checking if the question exists
    const question = await Question.findById(req.query.qid);
    if (!question) return res.status(404).json({ success: false, error: "Question not found" });

    const answeredBy = req.user._id;

    // Post an answer
    if (req.method === "POST") {
      // Checking if the user is the asker
      if (question.askedBy.toString() === req.user._id.toString())
        return res
          .status(400)
          .json({ success: false, error: "You cannot answer your own questions" });

      // Checking if the user already posted an answer on product
      for (const answer of question.answers)
        if (answer.answeredBy.toString() === answeredBy.toString())
          return res
            .status(400)
            .json({ success: false, error: "You have already answered the question" });

      // Adding the answer and sending back the question
      question.answers.push({ answer: req.body.answer, answeredBy });
      await question.populate("askedBy");
      await question.populate("answers.answeredBy").execPopulate();
      await question.save();
      return res.status(200).json({ success: true, question });
    }
    // Delete an answer
    else if (req.method === "DELETE") {
      // Checking if the user already posted an answer on product
      const index = question.answers.findIndex(
        (answer: any) => answer.answeredBy.toString() === answeredBy.toString()
      );
      if (index === -1)
        return res
          .status(400)
          .json({ success: false, error: "You have not answered the question" });

      // Removing the answer and returning it
      question.answers.slice(index, 1);
      await question.save();
      return res.status(200).json({ success: true, question });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(handler);
