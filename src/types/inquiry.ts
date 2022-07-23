import { Types } from "mongoose";
import { Directory } from "types/directory";

export interface Inquiry {
  _id: Types.ObjectId;
  directory: Types.ObjectId | Directory;
  name: string;
  number: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
