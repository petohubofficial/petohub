import mongoose from "mongoose";
import { User } from "types/user";
import { Category } from "types/category";
import { Review, Rating } from "types/review";

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

export interface Directory extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  storeName: string;
  user: mongoose.Schema.Types.ObjectId | User | null;
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
