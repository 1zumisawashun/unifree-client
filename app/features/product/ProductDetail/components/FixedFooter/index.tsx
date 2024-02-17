"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useToast } from "@/components/elements/Toast/hooks/useToast";
import { createPrismaMatch } from "@/features/product/ProductDetail/components/FixedFooter/hooks/createPrismaMatch";
import { isSp } from "@/functions/helpers/formatBoolean";
import { useServerAction } from "@/functions/hooks/useServerAction";
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
  const { name, stripePriceId, price, images, userId, id, description } =
    product;
  const { addItem, cartDetails } = useShoppingCart();
  const { showToast, closeToast } = useToast();
  const { isPending, serverAction } = useServerAction();

  const hasItem = Object.keys(cartDetails ?? {}).includes(stripePriceId);
  const hasMatch = !!matchId;

  const addCart = () => {
    const params = {
      name,
      id: stripePriceId,
      product_data: {
        id,
        description,
      },
      price,
      currency: "jpy",
      image: images[0]?.src,
    };
    addItem(params);
    showToast({ message: "カートに追加しました", theme: "success" });
  };

  const createMatch = async () => {
    const params = {
      currentUserId,
      opponentUserId: userId,
      name: product.name,
    };

    const response = await serverAction(() => createPrismaMatch(params));
    if (response.ok) {
      showToast({ message: "マッチングに成功しました", theme: "success" });
    } else {
      showToast({ message: "マッチングに失敗しました", theme: "danger" });
    }
  };

  useEffect(() => {
    return () => closeToast();
  }, [closeToast]);

  return (
    <footer className={styles[`${BLOCK_NAME}`]}>
      <ButtonWrapper
        direction={isSp() ? "column" : "row"}
        className={styles[`${BLOCK_NAME}-button-wrapper`]}
      >
        <Button
          onClick={createMatch}
          disabled={hasMatch}
          loading={isPending}
          className={styles[`${BLOCK_NAME}-button`]}
        >
          チャットで交渉する
        </Button>
        <Button
          onClick={addCart}
          disabled={hasItem}
          className={styles[`${BLOCK_NAME}-button`]}
        >
          カートに追加する
        </Button>
      </ButtonWrapper>
    </footer>
  );
}
