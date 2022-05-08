import { Schema, Types, models, model } from "mongoose";
import type { Pet } from "types/pet";

const PetSchema = new Schema<Pet>(
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

export default models.Pet || model<Pet>("Pet", PetSchema);
