import { Types } from "mongoose";
import { Response } from "types/common";
import { Directory } from "types/directory";
import { Edit } from "types/edit";
import { Question } from "types/question";
import { Rating, Review } from "types/review";

export enum AffiliateProvider {
  AMAZON = "Amazon",
  FLIPKART = "Flipkart",
  EBAY = "Ebay",
  SNAPDEAL = "Snapdeal",
  OTHER = "Other",
}

export interface AffiliateLink {
  id: string;
  link: string;
  provider: AffiliateProvider;
  price: number;
}

export enum FoodClassification {
  VEGETARIAN = "Vegetarian",
  NON_VEGETARIAN = "Non-Vegetarian",
  VEGAN = "Vegan",
  OTHER = "Other",
  NOT_APPLICABLE = "Not Applicable",
}

export interface Product {
  _id: Types.ObjectId;
  name: string;
  alias: string[];
  seller: Types.ObjectId | Directory | null;
  category: string;
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
  foodClassification: FoodClassification;
  ageRange: {
    min: number;
    max: number;
  };
  productImages: string[];
  link: string;
  affiliateLinks: AffiliateLink[];
  edits: Types.ObjectId[] | Edit[];
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
  page: number;
  limit: number;
  q?: string;
  sort?: string;
  category?: string;
  pet?: string;
  brand?: string;
  min?: number;
  max?: number;
}
export interface ProductRequest {
  seller: Types.ObjectId | Directory | null;
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
  foodClassification: FoodClassification;
  ageRange: {
    min: number;
    max: number;
  };
  affiliateLinks: AffiliateLink[];
  productImages: string[];
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

export interface AddProductResponse extends Response {
  product: Product;
}

export interface EditProductResponse extends Response {
  product: Product;
}

export interface DeleteProductResponse extends Response {
  product: Product;
}

export interface GetProductResponse extends Response {
  product: Product;
}

export interface ApproveProductResponse extends Response {
  product: Product;
}
