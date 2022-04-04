import axios from "axios";
import toast from "react-hot-toast";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  MeResponse,
  VerifyResponse,
  ForgotPasswordRequest,
  ForgotPasswordRespose,
  ResetPasswordResponse,
  ResetPasswordRequest,
} from "types/auth";

class AuthService {
  async login(request: LoginRequest): Promise<LoginResponse> {
    try {
      const { data } = await axios.post("/api/auth/login", request);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async register(request: RegisterRequest): Promise<RegisterResponse> {
    try {
      const { data } = await axios.post("/api/auth/register", request);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async me(): Promise<MeResponse> {
    try {
      const { data } = await axios.get("/api/user", { withCredentials: true });
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async verify(token: string): Promise<VerifyResponse> {
    try {
      const { data } = await axios.get(`/api/auth/verify?token=${token}`);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async forgotPassword(request: ForgotPasswordRequest): Promise<ForgotPasswordRespose> {
    try {
      const { data } = await axios.post("/api/auth/forgotpassword", request);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async resetPassword(
    token: string,
    request: ResetPasswordRequest
  ): Promise<ResetPasswordResponse> {
    try {
      const { data } = await axios.post(`/api/auth/resetpassword?token=${token}`, request);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }
}

export const auth = new AuthService();
