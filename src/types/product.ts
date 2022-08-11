import { Types } from "mongoose";
import { PaginatedResponse, Response } from "types/common";
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

export type Size = {
  length: number;
  width: number;
  height: number;
};

export type AgeRange = {
  min: number;
  max: number;
};

export enum VariationBasis {
  COLOR = "Color",
  SIZE = "Size",
  WEIGHT = "Weight",
}

export interface Variation {
  sku: string;
  price: number;
  countInStock: number;
  onOffer?: boolean;
  offerPrice?: number;
  basis?: VariationBasis;
  attributes: Partial<{
    color: string;
    size: Size;
    weight: number;
  }>;
}

export interface Product {
  _previousProductImages: string[];
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
  baseVariant: Variation;
  variations: Variation[];
  foodClassification: FoodClassification;
  ageRange: AgeRange;
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

export type ProductRequest = Pick<
  Product,
  | "seller"
  | "name"
  | "petType"
  | "keywords"
  | "breedType"
  | "description"
  | "baseVariant"
  | "variations"
  | "ageRange"
  | "productImages"
  | "foodClassification"
  | "affiliateLinks"
> & {
  brand: Product["brand"] | null;
  category: Product["category"] | null;
};

export type ProductResponse = Response & { product: Product };
export type ProductsResponse = Omit<Response, "data"> & { data: PaginatedResponse<Product> };
