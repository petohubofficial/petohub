import mongoose from "mongoose";
import { Directory } from "types/directory";

export enum Role {
  ADMIN = "Admin",
  CUSTOMER = "Customer",
  CLIENT = "Client",
  PRODUCT_ADMIN = "Product Admin",
}

export interface User extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  number: string;
  profileImage: string;
  role: Role;
  directory: mongoose.Schema.Types.ObjectId | Directory | null;
  isVerified: boolean;
  verificationToken: string;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  verifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  getVerificationToken: () => string;
  matchPasswords: (password: string) => boolean;
  generateAuthToken: () => string;
  getResetToken: () => string;
}
