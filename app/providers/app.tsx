"use client";

import { AuthProvider } from "@/components/elements/AuthProvider";
import { CartProvider } from "@/components/elements/CartProvider";
import { ToastProvider } from "@/components/elements/ToastProvider";
import { SessionProvider } from "next-auth/react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthProvider>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
