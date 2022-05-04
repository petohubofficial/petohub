import mongoose from "mongoose";
import { Edit } from "types/edit";
import { Question } from "types/question";
import { Review, Rating } from "types/review";
import { Directory } from "types/directory";
import { Category } from "types/category";
import { Response } from "types/common";

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

export interface GetProductsFilters {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
  category?: string;
  pet?: string;
  brand?: string;
  min?: number;
  max?: number;
}
export interface PaginatedResponse {
  total: number;
  pages: number;
  results: Product[];
  next: { page: number; limit: number };
  prev: { page: number; limit: number };
}
export interface GetProductsResponse extends Response {
  data: PaginatedResponse;
}

export interface CreateProductRequest {
  seller: string | mongoose.Schema.Types.ObjectId;
  name: string;
  brand: string;
  category: string;
  petType: string[];
  keywords: string[];
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
  affiliateLinks: AffiliateLink[];
  productImages: string[];
}
