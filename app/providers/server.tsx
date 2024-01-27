import { AuthProvider } from "@/components/elements/AuthProvider";
import "server-only";

export function ServerProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
