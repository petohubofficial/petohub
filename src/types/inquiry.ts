import { Types } from "mongoose";
import { Response } from "types/common";
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

export interface AddInquiry {
  name: string;
  number: string;
  email: string;
  message: string;
  directory: string;
}

export type AddInquiryResponse = Response<Inquiry>;
