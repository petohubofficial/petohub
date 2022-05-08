import { Types } from "mongoose";
import { Directory } from "./directory";
import { Product } from "./product";
import { Service } from "./service";

export enum CategoryType {
  PRODUCT = "Product",
  DIRECTORY = "Directory",
  SERVICE = "Service",
}

export interface Category {
  _id: Types.ObjectId;
  name: string;
  type: CategoryType;
  subCategories: string[] | Category[];
  pet: string[];
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  docs: Product[] | Directory[] | Service[];
}

export interface CategoryResponse {
  success: boolean;
  categories?: Category[];
  error?: string;
}
