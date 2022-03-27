import mongoose from "mongoose";

export enum CategoryType {
  PRODUCT = "Product",
  DIRECTORY = "Directory",
  SERVICE = "Service",
}

export interface Category extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  type: CategoryType;
  subCategories: string[] | Category[];
  pet: string[];
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  docs: mongoose.Document[];
}

export interface CategoryResponse {
  success: boolean;
  categories?: Category[];
  error?: string;
}
