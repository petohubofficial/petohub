import mongoose from "mongoose";
import type { Question } from "types/question";

const QuestionSchema = new mongoose.Schema<Question>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    askedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    question: {
      type: String,
      required: [true, "Please provide a question"],
      trim: true,
      minlength: [6, "Question is too short"],
      maxlength: [64, "Question is too long"],
    },
    answers: {
      type: [
        {
          _id: false,
          answer: {
            type: String,
            required: [true, "Please provide an answer"],
            trim: true,
            minlength: [6, "Answer is too short"],
            maxlength: [1024, "Answer is too long"],
          },
          answeredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          answeredAt: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Question || mongoose.model<Question>("Question", QuestionSchema);
