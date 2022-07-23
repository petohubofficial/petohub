import { Types } from "mongoose";
import { User } from "types/user";

export interface Rating {
  ["1"]: number;
  ["2"]: number;
  ["3"]: number;
  ["4"]: number;
  ["5"]: number;
}

export enum RevieweeModel {
  PRODUCT = "Product",
  DIRECTORY = "Directory",
  SERVICE = "Service",
}

export interface Review {
  _id: Types.ObjectId;
  reviewer: Types.ObjectId | User;
  revieweeModel: RevieweeModel;
  revieweeId: Types.ObjectId;
  subject: string;
  comment: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
