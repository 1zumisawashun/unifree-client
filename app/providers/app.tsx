import { CartProvider } from "@/components/elements/CartProvider";
import { ToastProvider } from "@/components/elements/ToastProvider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <ToastProvider>{children}</ToastProvider>
    </CartProvider>
  );
}
