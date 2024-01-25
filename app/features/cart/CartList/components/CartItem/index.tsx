"use client";

import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { CartItem as ICartItem } from "@/functions/constants/cart-details";
import styles from "./styles.module.scss";

type CartItemProps = {
  cart: ICartItem;
};

const BLOCK_NAME = "cart-item";

/* eslint-disable @next/next/no-img-element */
export const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const { id, name, image, price } = cart;
  return (
    <UnstyledButtonAnchor href={`/books/${id}`}>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <div className={styles[`${BLOCK_NAME}-layer`]}>
          <img className={styles[`${BLOCK_NAME}-image`]} src={image} alt="" />
        </div>
        <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
        <div className={styles[`${BLOCK_NAME}-content`]}>
          <p>{price}</p>
        </div>
      </div>
    </UnstyledButtonAnchor>
  );
};
