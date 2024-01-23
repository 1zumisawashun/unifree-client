import { ToastProvider } from "@/functions/contexts";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToastProvider>{children}</ToastProvider>;
}
