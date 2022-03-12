// @ts-nocheck
import mongoose from "mongoose";

const EditSchema = new mongoose.Schema(
  {
    date: Date,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    changes: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Edit", EditSchema);
