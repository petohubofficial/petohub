// @ts-nocheck
import mongoose from "mongoose";

// Registering dependency models
if (!mongoose.models.Category) require("models/Category");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    breeds: { type: [String], default: [] },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

// Virtual function to get all relevent categories for the pet
PetSchema.virtual("categories", {
  ref: "Category",
  localField: "name",
  foreignField: "pet",
});

export default mongoose.model("Pet", PetSchema);
