import type { AuthContextValue } from "contexts/auth";
import { AuthContext } from "contexts/auth";
import { useContext } from "react";
export const useAuth = (): AuthContextValue => useContext(AuthContext) as any;
