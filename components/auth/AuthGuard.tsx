import { useAuth } from "hooks/auth";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Role } from "types/user";

interface AuthGuardProps {
  children: ReactNode;
  roles?: Role[];
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children, roles } = props;
  const auth = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      if (!router.isReady) return;
      if (!auth.isAuthenticated) {
        toast.error("You must be logged in to access this page");
        router.push({
          pathname: "/login",
          query: {
            redirect: router.pathname,
          },
        });
      } else if (roles && auth.isAuthenticated) {
        const hasRole = roles.some((role) => auth?.user?.role === role);
        if (!hasRole) {
          toast.error("You do not have the required permissions to access this page");
          router.push("/");
        } else setChecked(true);
      } else setChecked(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  if (!checked) return null;
  return <>{children}</>;
};
