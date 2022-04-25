import { createContext, useEffect, useReducer } from "react";
import type { FC, ReactNode } from "react";
import { auth } from "services/auth.service";
import type { User } from "types/user";
import {
  ForgotPasswordRequest,
  ForgotPasswordRespose,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  VerifyResponse,
} from "types/auth";
import toast from "react-hot-toast";

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthContextValue extends State {
  platform: "JWT";
  login: (request: LoginRequest) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  register: (request: RegisterRequest) => Promise<RegisterResponse>;
  verify: (token: string) => Promise<VerifyResponse>;
  forgotPassword: (request: ForgotPasswordRequest) => Promise<ForgotPasswordRespose>;
  resetPassword: (token: string, request: ResetPasswordRequest) => Promise<ResetPasswordResponse>;
}

interface AuthProviderProps {
  children: ReactNode;
}

enum ActionType {
  INITIALIZE = "INITIALIZE",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
  VERIFY = "VERIFY",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  RESET_PASSWORD = "RESET_PASSWORD",
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: ActionType.LOGIN;
  payload: LoginResponse;
};

type LogoutAction = {
  type: ActionType.LOGOUT;
};

type RegisterAction = {
  type: ActionType.REGISTER;
  payload: RegisterResponse;
};

type VerifyAction = {
  type: ActionType.VERIFY;
  payload: VerifyResponse;
};

type ForgotPasswordAction = {
  type: ActionType.FORGOT_PASSWORD;
  payload: ForgotPasswordRespose;
};

type ResetPasswordAction = {
  type: ActionType.RESET_PASSWORD;
  payload: ResetPasswordResponse;
};

type Action =
  | InitializeAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | VerifyAction
  | ForgotPasswordAction
  | ResetPasswordAction;

type Handler = (state: State, action: any) => State;

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null as any,
};

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  LOGIN: (state: State, action: LoginAction): State => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),

  REGISTER: (state: State): State => {
    return state;
  },

  VERIFY: (state: State): State => {
    return state;
  },

  FORGOT_PASSWORD: (state: State): State => {
    return state;
  },

  RESET_PASSWORD: (state: State): State => {
    return state;
  },
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  platform: "JWT",
  // @ts-ignore
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  // @ts-ignore
  register: () => Promise.resolve(),
  // @ts-ignore
  verify: () => Promise.resolve(),
  // @ts-ignore
  forgotPassword: () => Promise.resolve(),
  // @ts-ignore
  resetPassword: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const { success, user } = await auth.me();
        if (success)
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
          dispatch({ type: ActionType.LOGOUT });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (request: LoginRequest): Promise<LoginResponse> => {
    const loginResponse = await auth.login(request);
    dispatch({
      type: ActionType.LOGIN,
      payload: loginResponse,
    });
    return loginResponse;
  };

  const logout = async (): Promise<void> => {
    await auth.logout();
    dispatch({ type: ActionType.LOGOUT });
    toast.success("Logged out successfully");
  };

  const register = async (request: RegisterRequest): Promise<RegisterResponse> => {
    const registerResponse = await auth.register(request);
    dispatch({
      type: ActionType.REGISTER,
      payload: registerResponse,
    });
    return registerResponse;
  };

  const verify = async (token: string): Promise<VerifyResponse> => {
    const verifyResponse = await auth.verify(token);
    dispatch({
      type: ActionType.VERIFY,
      payload: verifyResponse,
    });
    return verifyResponse;
  };

  const forgotPassword = async (request: ForgotPasswordRequest): Promise<ForgotPasswordRespose> => {
    const forgotPasswordResponse = await auth.forgotPassword(request);
    dispatch({
      type: ActionType.FORGOT_PASSWORD,
      payload: forgotPasswordResponse,
    });
    return forgotPasswordResponse;
  };

  const resetPassword = async (
    token: string,
    request: ResetPasswordRequest
  ): Promise<ResetPasswordResponse> => {
    const resetPasswordResponse = await auth.resetPassword(token, request);
    dispatch({
      type: ActionType.RESET_PASSWORD,
      payload: resetPasswordResponse,
    });
    return resetPasswordResponse;
  };

  return (
    <AuthContext.Provider
      value={
        {
          ...state,
          platform: "JWT",
          login,
          logout,
          register,
          verify,
          forgotPassword,
          resetPassword,
        } as AuthContextValue
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
