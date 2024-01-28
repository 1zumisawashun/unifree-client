"use client";

import { LoadingSpinner } from "@/components/elements/LoadingSpinner";
import { Panel } from "@/components/elements/Panel";
import { API } from "@/functions/constants/api";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "cart-thankyou";

const url = API.deleteStripePrices;

/* eslint-disable react-hooks/exhaustive-deps */
export const CartThankyou: React.FC = () => {
  const [isPending, setIsPending] = useState(false);

  const { cartDetails, clearCart } = useShoppingCart();

  // 本来はwebhookでstripeの更新をしたい
  const update = async () => {
    setIsPending(true);
    try {
      const params = Object.keys(cartDetails ?? {}).map((key) => key);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(params),
      });
      const json = await response.json();
      console.log(json);
      clearCart();
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
  };

  useEffect(() => {
    update();
  }, []);

  if (isPending) return <LoadingSpinner />;

  return (
    <Panel theme="success">
      <h3 className={styles[`${BLOCK_NAME}-title`]}>Thank You For Buying.</h3>
      <p>Hi, Your order has been successfully placed.</p>
    </Panel>
  );
};
