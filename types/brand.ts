import { Types } from "mongoose";
import { Directory } from "types/directory";
import { Product } from "types/product";

export interface Brand {
  _id: Types.ObjectId;
  name: string;
  logo: string;
  images: string[];
  description: string;
  sellers: Types.ObjectId[] | Directory[];
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

export interface BrandResponse {
  success: boolean;
  brands?: Brand[];
  error?: string;
}
