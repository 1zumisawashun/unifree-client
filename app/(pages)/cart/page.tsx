import { SubHeader } from "@/components/layouts/SubHeader";
import { Cart } from "@/features/cart/CartList";

export default function Page() {
  return (
    <SubHeader title="Shopping Cart" href="/">
      <Cart />
    </SubHeader>
  );
}
