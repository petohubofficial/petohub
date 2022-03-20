import { useContext } from "react";
import { AuthContext } from "contexts/auth";
import type { AuthContextValue } from "contexts/auth";
export const useAuth = (): AuthContextValue => useContext(AuthContext) as any;
