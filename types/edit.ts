import mongoose from "mongoose";
import { Product } from "types/product";
import { User } from "types/user";

export interface Edit {
  _id: mongoose.Schema.Types.ObjectId;
  date: Date;
  product: mongoose.Schema.Types.ObjectId | Product;
  user: mongoose.Schema.Types.ObjectId | User;
  changes: Object;
  createdAt: Date;
  updatedAt: Date;
}
