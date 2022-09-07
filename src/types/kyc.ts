import { Types } from "mongoose";
import { User } from "./user";

export enum Status {
  PENDING = "pending",
  AWAITING_APPROVAL = "awaiting_approval",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export interface KYCDetails {
  status: Status;
  number: string;
  files: string[];
}

export interface KYC {
  _id: Types.ObjectId;
  user: Types.ObjectId | User;
  status: Status;
  identity: KYCDetails;
  selfie: KYCDetails;
  pan: KYCDetails;
  gst: KYCDetails;
  verifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
