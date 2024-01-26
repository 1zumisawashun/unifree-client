"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthValidation = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();
  const { status } = session;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status === "unauthenticated") return null;

  return children;
};

const authRoutes = ["/mypage", "/books/[id]", "/cart"];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const session = useSession();
  const { status } = session;

  console.log(status);

  if (status === "loading") return null;

  return authRoutes.includes(pathname) ? (
    <AuthValidation>{children}</AuthValidation>
  ) : (
    children
  );
};
