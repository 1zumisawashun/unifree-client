"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useToast } from "@/components/elements/Toast/hooks/useToast";
import { createPrismaMatch } from "@/components/layouts/FixedFooter/hooks/createPrismaMatch";
import { Product } from "@/functions/types/Prisma";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import styles from "./styles.module.scss";

const BLOCK_NAME = "footer";

export function FixedFooter({
  product,
  currentUserId,
  matchId,
}: {
  product: Product;
  currentUserId: number;
  matchId?: number;
}) {
  const { name, stripePriceId, price, images, userId, id } = product;
  const { addItem, cartDetails } = useShoppingCart();
  const { showToast, closeToast } = useToast();

  const hasItem = Object.keys(cartDetails ?? {}).includes(stripePriceId);

  const item = {
    name,
    id: stripePriceId,
    product_data: {
      id,
    },
    price,
    currency: "jpy",
    image: images[0]?.src,
  };

  const addCart = () => {
    addItem(item);
    showToast({ message: "カートに追加しました", theme: "success" });
  };

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  const createMatch = async () => {
    const params = {
      currentUserId,
      opponentUserId: userId,
      name: product.name,
    };
    try {
      const response = await createPrismaMatch(params);
      if (!response) throw new Error();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className={styles[`${BLOCK_NAME}`]}>
      <ButtonWrapper>
        <Button onClick={createMatch} disabled={!!matchId}>
          チャットで交渉する
        </Button>
        <Button onClick={addCart} disabled={hasItem}>
          カートに入れる
        </Button>
      </ButtonWrapper>
    </footer>
  );
}
