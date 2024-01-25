"use client";

import { Button } from "@/components/buttons";
import { useShoppingCart } from "use-shopping-cart";

export function Cart() {
  const { cartDetails } = useShoppingCart();
  console.log(cartDetails);

  const buy = async () => {
    const response = await fetch("/api/stripe/checkout_sessions/create", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const json = await response.json();
    window.open(json.url);
  };
  return (
    <div>
      test
      <Button onClick={buy}>buy</Button>
    </div>
  );
}
