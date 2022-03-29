import { useAuth } from "hooks/auth";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const auth = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      if (!router.isReady) return;
      if (!auth.isAuthenticated) router.push("/login");
      else setChecked(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  if (!checked) return null;
  return <>{children}</>;
};
