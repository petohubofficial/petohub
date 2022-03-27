import mongoose from "mongoose";
import { Category } from "types/category";

export interface Pet {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  image: string;
  description: string;
  breeds: string[];
  createdAt: Date;
  updatedAt: Date;
  categories: Category[];
}

export interface PetResponse {
  success: boolean;
  pets?: Pet[];
  error?: string;
}
