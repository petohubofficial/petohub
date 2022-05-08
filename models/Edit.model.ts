import { Schema, Types, models, model } from "mongoose";
import type { Edit } from "types/edit";

const EditSchema = new Schema<Edit>(
  {
    date: Date,
    product: {
      type: Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    changes: Object,
  },
  { timestamps: true }
);

export default models.Edit || model<Edit>("Edit", EditSchema);
