import { Types } from "mongoose";
import { Directory } from "types/directory";
import { PaginatedResponse, Response } from "./common";

export enum Role {
  ADMIN = "Admin",
  CUSTOMER = "Customer",
  CLIENT = "Client",
  PRODUCT_ADMIN = "Product Admin",
}

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  number: string;
  profileImage: string;
  _previousProfileImage: string;
  role: Role;
  directory: Types.ObjectId | Directory | null;
  isVerified: boolean;
  verificationToken: string;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  verifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  getVerificationToken: () => string;
  matchPasswords: (password: string) => boolean;
  generateAccessToken: () => string;
  generateRefreshToken: () => string;
  getResetToken: () => string;
}

export interface GetUsersFilters {
  limit: number;
  page: number;
}

export interface GetUsersResponse extends Response {
  data: PaginatedResponse<User>;
}

export interface GetUserResponse extends Response {
  user: User;
}

export interface VerifyUserResponse extends Response {
  user: User;
}
