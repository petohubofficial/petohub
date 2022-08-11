import { Types } from "mongoose";
import { User } from "types/user";

export type Star = 1 | 2 | 3 | 4 | 5;
export type Rating = { [star in Star]: number };

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
  rating: Star;
  createdAt: Date;
  updatedAt: Date;
}
