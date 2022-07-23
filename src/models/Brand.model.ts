import { model, models, Schema, Types } from "mongoose";
import type { Brand } from "types/brand";

require("models/Directory.model");
require("models/Product.model");

const BrandSchema = new Schema<Brand>(
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
          type: Types.ObjectId,
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

export default models.Brand || model<Brand>("Brand", BrandSchema);
