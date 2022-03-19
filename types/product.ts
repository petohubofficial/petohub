import mongoose from "mongoose";
import { Edit } from "types/edit";
import { Question } from "types/question";
import { Review, Rating } from "types/review";
import { Directory } from "types/directory";
import { Category } from "types/category";

export interface AffiliateLink {
  productId: string;
  productLink: string;
  productProvider: string;
  productPrice: number;
}

export interface Product extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  alias: string[];
  seller: mongoose.Schema.Types.ObjectId | Directory | null;
  category: string | Category;
  brand: string;
  keywords: string[];
  petType: string[];
  breedType: string;
  description: string;
  weight: number;
  size: {
    length: number;
    width: number;
    height: number;
  };
  countInStock: number;
  price: number;
  isVeg: boolean;
  ageRange: {
    min: number;
    max: number;
  };
  productImages: string[];
  link: string;
  affiliateLinks: AffiliateLink[];
  edits: mongoose.Schema.Types.ObjectId[] | Edit[];
  lastEdit: Edit | null;
  isApproved: boolean;
  approvedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  questions: Question[];
  reviews: Review[];
  rating: Rating;
  averageRating: number;
}
