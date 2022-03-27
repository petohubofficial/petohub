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
