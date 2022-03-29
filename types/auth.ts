import { Response } from "types/common";
import { User } from "types/user";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends Response {
  token: string;
  user: User;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse extends Response {
  data?: string;
}

export interface MeResponse extends Response {
  user: User;
}

export interface VerifyResponse extends Response {
  data?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordRespose extends Response {
  data?: string;
}

export interface ResetPasswordRequest {
  password: string;
}

export interface ResetPasswordResponse extends Response {
  data?: string;
}
