import { Schema, Types, models, model } from "mongoose";
import type { Question } from "types/question";

const QuestionSchema = new Schema<Question>(
  {
    product: {
      type: Types.ObjectId,
      ref: "Product",
      required: true,
    },
    askedBy: {
      type: Types.ObjectId,
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
            type: Types.ObjectId,
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

export default models.Question || model<Question>("Question", QuestionSchema);
