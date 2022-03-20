import mongoose from "mongoose";
import type { Brand } from "types/brand";

const BrandSchema = new mongoose.Schema<Brand>(
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

export default mongoose.models.Brand || mongoose.model<Brand>("Brand", BrandSchema);
