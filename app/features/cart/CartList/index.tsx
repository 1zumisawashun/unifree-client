"use client";

import { Button, ButtonAnchor } from "@/components/buttons";
import { ErrorEmpty } from "@/components/elements/ErrorFallback";
import { CartList } from "@/features/cart/CartList/components/CartList";
import { CartDetails } from "@/functions/constants/cart-details";
import { useShoppingCart } from "use-shopping-cart";

export function Cart() {
  const { cartDetails, totalPrice } = useShoppingCart();

  const buy = async () => {
    const response = await fetch("/api/stripe/checkout_sessions/create", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const json = await response.json();
    window.open(json.url);
  };

  if (!cartDetails) return <ErrorEmpty />;

  return (
    <div>
      <CartList carts={cartDetails as any as CartDetails} />
      <hr />
      <div>
        <p>合計</p>
        <p>{totalPrice}</p>
      </div>
      <p>「Pay Now」押下後に決済ページへ遷移します。</p>
      <Button onClick={buy}>Pay Now</Button>
      <ButtonAnchor href={"/books"} variant="outlined">
        Continue Shopping
      </ButtonAnchor>
    </div>
  );
}
