import { Types } from "mongoose";
import { Category } from "types/category";

export interface Pet {
  _id: Types.ObjectId;
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
