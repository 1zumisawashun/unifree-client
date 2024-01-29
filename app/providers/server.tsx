import { AuthProvider } from "@/components/elements/AuthProvider";
import "server-only";

// ミドルウェアで対応する予定_20240129
export function ServerProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
