"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useToast } from "@/components/elements/Toast/hooks/useToast";
import { createMatch } from "@/components/layouts/FixedFooter/hooks/createMatch";
import { Product } from "@/functions/types/Prisma";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";
const BLOCK_NAME = "footer";

export function FixedFooter({
  product,
  currentUserId,
}: {
  product: Product;
  currentUserId: number;
}) {
  const { name, stripePriceId, price, images, userId, id } = product;
  const { addItem, cartDetails } = useShoppingCart();
  const { showToast, closeToast } = useToast();

  const hasItem = Object.keys(cartDetails ?? {}).includes(stripePriceId);

  const addCart = () => {
    addItem({
      name,
      id: stripePriceId,
      product_data: {
        id,
      },
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
      <ButtonWrapper>
        <Button
          onClick={() =>
            createMatch({
              currentUserId,
              opponentUserId: userId,
              name: product.name,
            })
          }
        >
          チャットで交渉する
        </Button>
        <Button onClick={addCart} disabled={hasItem}>
          カートに入れる
        </Button>
      </ButtonWrapper>
    </footer>
  );
}
