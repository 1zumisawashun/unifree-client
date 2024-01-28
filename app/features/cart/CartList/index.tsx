"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { ErrorEmpty } from "@/components/elements/ErrorFallback";
// import { LoadingDot } from "@/components/elements/LoadingDot";
import { CartList } from "@/features/cart/CartList/components/CartList";
import { API } from "@/functions/constants/api";
import { CartDetails } from "@/functions/constants/cart";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "cart";

const url = API.createStripeCheckoutSessions;

export function Cart() {
  const { cartDetails, totalPrice } = useShoppingCart();

  const buy = async () => {
    const params = Object.keys(cartDetails ?? {}).map((key) => key);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
    });
    const json = await response.json();
    window.location.href = json.url;
  };

  // if (Object.values(cartDetails ?? {}).length === 0) return <LoadingDot />;

  if (!totalPrice) return <ErrorEmpty />;

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <CartList carts={cartDetails as any as CartDetails} />
      <hr className={styles[`${BLOCK_NAME}-divider`]} />
      <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
        <p>合計</p>
        <p>{formatCurrencyString(totalPrice)}</p>
      </div>
      <p className={styles[`${BLOCK_NAME}-text`]}>
        「Pay Now」押下後に決済ページへ遷移します。
      </p>
      <ButtonWrapper direction="column">
        <Button onClick={buy} className={styles[`${BLOCK_NAME}-button`]}>
          Pay Now
        </Button>
        <ButtonAnchor
          href={"/books"}
          variant="outlined"
          className={styles[`${BLOCK_NAME}-button`]}
        >
          Continue Shopping
        </ButtonAnchor>
      </ButtonWrapper>
    </div>
  );
}
