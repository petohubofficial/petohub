import { model, models, Schema } from "mongoose";
import { Category, CategoryType } from "types/category";

Object.values(CategoryType).forEach((type) => require(`models/${type}.model`));

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    type: {
      type: String,
      enum: Object.values(CategoryType),
      required: true,
    },
    subCategories: {
      type: [
        {
          type: String,
          ref: "Category",
        },
      ],
      default: [],
    },
    pet: { type: [String], default: [] },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

// Virtual function to allow dynamic refs to Product, Service, Directory models
CategorySchema.virtual("docs", {
  ref: (doc: Category) => doc.type,
  localField: "name",
  foreignField: "category",
});

export default models.Category || model<Category>("Category", CategorySchema);
