"use client";

import { Button } from "@/components/buttons";
import { useToast } from "@/components/elements/Toast/hooks/useToast";
import { Product } from "@/functions/models/Products";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "footer";

export function FixedFooter({ product }: { product: Product }) {
  const { name, stripe_price_id, price, images } = product;
  const { addItem, cartDetails } = useShoppingCart();
  const { showToast, closeToast } = useToast();

  const hasItem = Object.keys(cartDetails ?? {}).includes(stripe_price_id);

  const add = () => {
    addItem({
      name,
      id: stripe_price_id,
      price,
      currency: "jpy",
      image: images[0]?.src,
    });
    showToast({ message: "カートに追加しました", theme: "success" });
  };

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  return (
    <footer className={styles[`${BLOCK_NAME}`]}>
      <Button onClick={add} disabled={hasItem}>
        カートに入れる
      </Button>
    </footer>
  );
}
