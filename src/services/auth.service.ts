import axios from "axios";
import toast from "react-hot-toast";
import {
  ForgotPasswordRequest,
  ForgotPasswordRespose,
  LoginRequest,
  LoginResponse,
  MeResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  UpdateProfileResponse,
  VerifyResponse,
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

  async logout(): Promise<void> {
    try {
      await axios.post("/api/auth/logout");
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
      const { data } = await axios.post("/api/auth/forgot-password", request);
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
      const { data } = await axios.post(`/api/auth/reset-password?token=${token}`, request);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }

  async updateProfile(request: FormData): Promise<UpdateProfileResponse> {
    try {
      const { data } = await axios.post("/api/user/updateprofile", request, {
        withCredentials: true,
      });
      if (data.success) toast.success("Profile updated successfully");
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }
}

export const auth = new AuthService();
