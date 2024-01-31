"use client";

import { Button } from "@/components/buttons";
import { Product } from "@/functions/constants/products";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "footer";

export function FixedFooter({ product }: { product: Product }) {
  const { name, id, price, images } = product;
  const { addItem, cartDetails } = useShoppingCart();

  const hasItem = Object.keys(cartDetails ?? {}).includes(id);

  const add = () => {
    addItem({
      name,
      id,
      price,
      currency: "jpy",
      image: images[0]?.src,
    });
  };

  return (
    <footer className={styles[`${BLOCK_NAME}`]}>
      <Button onClick={add} disabled={hasItem}>
        カートに入れる
      </Button>
    </footer>
  );
}
