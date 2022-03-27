import axios from "axios";
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
      console.log(error.response.data);
      return error.response.data;
    }
  }

  async register(request: RegisterRequest): Promise<RegisterResponse> {
    try {
      const { data } = await axios.post("/api/auth/register", request);
      return data;
    } catch (error: any) {
      console.log(error.response.data);
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
      console.log(error.response.data);
      return error.response.data;
    }
  }
}

export const auth = new AuthService();
