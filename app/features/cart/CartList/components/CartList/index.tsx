"use client";

import { CartItem } from "@/features/cart/CartList/components/CartItem";
import { CartDetails } from "@/functions/constants/cart";
import styles from "./styles.module.scss";

type Props = {
  carts: CartDetails;
};

const BLOCK_NAME = "cart-list";

export const CartList: React.FC<Props> = ({ carts }) => {
  const formattedCarts = Object.values(carts).map((cart) => cart);

  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      {formattedCarts.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      ))}
    </div>
  );
};
