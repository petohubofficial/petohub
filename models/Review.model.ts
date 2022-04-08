import mongoose from "mongoose";
import { Review, RevieweeModel } from "types/review";

const ReviewSchema = new mongoose.Schema<Review>(
  {
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    revieweeModel: {
      type: String,
      enum: RevieweeModel,
      required: true,
    },
    revieweeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    subject: {
      type: String,
      required: [true, "Please provide a review subject"],
      minlength: [6, "Subject is too short"],
      maxlength: [32, "Subject is too long"],
    },
    comment: {
      type: String,
      required: [true, "Please provide a review comment"],
      minlength: [6, "Comment is too short"],
      maxlength: [1024, "Comment is too long"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [0, "Rating should be between 0 and 5"],
      max: [5, "Rating should be between 0 and 5"],
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

// Virtual function to allow dynamic refs to Product, Service, Directory models
ReviewSchema.virtual("reviewee", {
  ref: (doc: Review) => doc.revieweeModel,
  localField: "revieweeId",
  foreignField: "_id",
  justOne: true,
});

export default mongoose.models.Review || mongoose.model<Review>("Review", ReviewSchema);
