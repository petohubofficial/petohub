import mongoose from "mongoose";
import { Directory } from "types/directory";
import { Product } from "types/product";

export interface Brand {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  logo: string;
  images: string[];
  description: string;
  sellers: mongoose.Schema.Types.ObjectId[] | Directory[];
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}
