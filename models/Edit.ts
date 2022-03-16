// @ts-nocheck
import mongoose from "mongoose";

// Registering dependency models
if (!mongoose.models.Product) require("models/Product");
if (!mongoose.models.User) require("models/User");

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
