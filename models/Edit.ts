import mongoose from "mongoose";

import { Edit } from "types/edit";

const EditSchema = new mongoose.Schema<Edit>(
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

export default mongoose.models.Edit || mongoose.model<Edit>("Edit", EditSchema);
