import { useAuth } from "hooks/auth";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";

interface GuestGuardProps {
  children: ReactNode;
}

export const GuestGuard: FC<GuestGuardProps> = (props) => {
  const { children } = props;
  const auth = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      if (!router.isReady) return;
      if (auth.isAuthenticated) router.push("/");
      else setChecked(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  if (!checked) return null;
  return <>{children}</>;
};
