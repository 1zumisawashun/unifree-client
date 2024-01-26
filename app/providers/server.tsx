import { AuthProvider } from "@/components/elements/AuthProvider";

export function ServerProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
