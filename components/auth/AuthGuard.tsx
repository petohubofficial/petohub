import { useAuth } from "hooks/auth";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Role } from "types/user";

interface AuthGuardProps {
  children: ReactNode;
  role?: Role;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children, role } = props;
  const auth = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      if (!router.isReady) return;
      if (!auth.isAuthenticated)
        router.push({
          pathname: "/login",
          query: {
            redirect: router.pathname,
          },
        });
      else if (role && auth.isAuthenticated && auth?.user?.role !== role) router.push("/");
      else setChecked(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  if (!checked) return null;
  return <>{children}</>;
};
