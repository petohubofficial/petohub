import { Types } from "mongoose";
import { Category } from "types/category";
import { Rating, Review } from "types/review";
import { User } from "types/user";
import { PaginatedResponse, Response } from "./common";
import { Product } from "./product";

export interface Location {
  lat: number;
  lng: number;
}

export interface Timings {
  from: string;
  to: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Details {
  title: string;
  content: string;
}

export interface Directory {
  _id: Types.ObjectId;
  storeName: string;
  user: Types.ObjectId | User | null;
  email: string;
  address: string;
  category: string[] | Category[];
  state: string;
  pincode: string;
  number: string;
  products: string[];
  services: string[];
  location: Location;
  timings: Timings[];
  faq: FAQ[];
  gallery: string[];
  features: string[];
  details: Details[];
  directoryImages: string[];
  website: string;
  tagline: string;
  description: string;
  username: string;
  isApproved: boolean;
  approvedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  reviews: Review[];
  rating: Rating;
  averageRating: number;
}

export interface GetDirectoriesFilters {
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

export type DirectoryResponse = Response<{ directory: Directory; products?: Product[] }>;
export type DirectoriesResponse = Response<PaginatedResponse<Directory>>;
