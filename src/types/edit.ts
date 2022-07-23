import { Types } from "mongoose";
import { Product } from "types/product";
import { User } from "types/user";

export interface Edit {
  _id: Types.ObjectId;
  date: Date;
  product: Types.ObjectId | Product;
  user: Types.ObjectId | User;
  changes: Object;
  createdAt: Date;
  updatedAt: Date;
}
