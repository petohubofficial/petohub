import axios from "axios";
import toast from "react-hot-toast";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  MeResponse,
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

  async me(accessToken: string): Promise<MeResponse> {
    try {
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Error");
      return error.response.data;
    }
  }
}

export const auth = new AuthService();
