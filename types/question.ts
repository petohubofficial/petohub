import mongoose from "mongoose";
import { Product } from "types/product";
import { User } from "types/user";

export interface Answer {
  answer: string;
  answeredBy: mongoose.Schema.Types.ObjectId | User;
  answeredAt: Date;
}

export interface Question {
  _id: mongoose.Schema.Types.ObjectId;
  product: mongoose.Schema.Types.ObjectId | Product;
  askedBy: mongoose.Schema.Types.ObjectId | User;
  question: string;
  answers: Answer[];
  createdAt: Date;
  updatedAt: Date;
}
