import { createContext, useEffect, useReducer } from "react";
import type { FC, ReactNode } from "react";
import { auth } from "services/auth.service";
import type { User } from "types/user";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "types/auth";

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthContextValue extends State {
  platform: "JWT";
  login: (request: LoginRequest) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  register: (request: RegisterRequest) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

enum ActionType {
  INITIALIZE = "INITIALIZE",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
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

type Action = InitializeAction | LoginAction | LogoutAction | RegisterAction;

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
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  platform: "JWT",
  // @ts-ignore
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = globalThis.localStorage.getItem("accessToken");
        if (accessToken) {
          const { user } = await auth.me(accessToken);
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
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
    localStorage.setItem("accessToken", loginResponse.token);
    dispatch({
      type: ActionType.LOGIN,
      payload: loginResponse,
    });
    return loginResponse;
  };

  const logout = async (): Promise<void> => {
    localStorage.removeItem("accessToken");
    dispatch({ type: ActionType.LOGOUT });
  };

  const register = async (request: RegisterRequest): Promise<void> => {
    const registerResponse = await auth.register(request);
    dispatch({
      type: ActionType.REGISTER,
      payload: registerResponse,
    });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, platform: "JWT", login, logout, register } as AuthContextValue}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
