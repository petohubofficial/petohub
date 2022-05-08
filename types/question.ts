import { Types } from "mongoose";
import { Product } from "types/product";
import { User } from "types/user";

export interface Answer {
  answer: string;
  answeredBy: Types.ObjectId | User;
  answeredAt: Date;
}

export interface Question {
  _id: Types.ObjectId;
  product: Types.ObjectId | Product;
  askedBy: Types.ObjectId | User;
  question: string;
  answers: Answer[];
  createdAt: Date;
  updatedAt: Date;
}
