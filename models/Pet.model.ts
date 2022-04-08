import mongoose from "mongoose";
import type { Pet } from "types/pet";

const PetSchema = new mongoose.Schema<Pet>(
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

export default mongoose.models.Pet || mongoose.model<Pet>("Pet", PetSchema);
