// @ts-nocheck
import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    logo: { type: String, default: "" },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
    sellers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Directory",
        },
      ],
      default: [],
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

// Virtual function to get all relevent products for the brand
BrandSchema.virtual("products", {
  ref: "Product",
  localField: "name",
  foreignField: "brand",
});

export default mongoose.models.Brand || mongoose.model("Brand", BrandSchema);
