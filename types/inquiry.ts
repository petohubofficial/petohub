import mongoose from "mongoose";
import { Directory } from "types/directory";

export interface Inquiry {
  _id: mongoose.Schema.Types.ObjectId;
  directory: mongoose.Schema.Types.ObjectId | Directory;
  name: string;
  number: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
