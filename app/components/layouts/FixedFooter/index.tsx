"use client";

import { Button } from "@/components/buttons";
import { Book } from "@/functions/constants/books";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "footer";

export function FixedFooter({ book }: { book: Book }) {
  const { addItem, cartDetails } = useShoppingCart();
  
  const hasItem = Object.keys(cartDetails ?? {}).includes(book.id);
  
  const add = () => {
    addItem({
      name: book.name,
      id: book.id,
      price: book.price,
      currency: "jpy",
      image: book.images[0]?.src,
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
