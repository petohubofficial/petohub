import mongoose from "mongoose";
import { Category } from "types/category";
import { Directory } from "types/directory";
import { Pet } from "types/pet";

export interface Service {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  alias: string[];
  seller: mongoose.Schema.Types.ObjectId | Directory | null;
  address: string;
  nameOfIncharge: string;
  numberOfIncharge: string;
  timings: {
    from: string;
    to: string;
  };
  days: number;
  category: string | Category;
  petType: string[] | Pet[];
  breedType: string;
  description: string;
  price: number;
  ageRange: {
    min: number;
    max: number;
  };
  serviceImages: string[];
  link: string;
  rating: number;
  isApproved: boolean;
  approvedAt: Date;
  numOfReviews: number;
  reviews: object[];
  createdAt: Date;
  updatedAt: Date;
}
