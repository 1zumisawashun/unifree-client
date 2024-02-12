"use client";

import { Button, ButtonAnchor } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { RemoveDialog } from "@/features/cart/CartList/components/RemoveDialog";
import { CartDetails, CartItem as ICartItem } from "@/functions/constants/cart";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import styles from "./styles.module.scss";

const BLOCK_NAME = "cart-card";

/* eslint-disable @next/next/no-img-element */
const Item = ({ cart }: { cart: ICartItem }) => {
  const { name, image, price, product_data } = cart;

  const removeDialog = useDialog();
  return (
    <>
      <div className={styles[`${BLOCK_NAME}-container`]}>
        <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
          <img className={styles[`${BLOCK_NAME}-image`]} src={image} alt="" />
        </div>
        <div className={styles[`${BLOCK_NAME}-content`]}>
          <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
          <p className={styles[`${BLOCK_NAME}-price`]}>
            {formatCurrencyString(price)}
          </p>
        </div>
        <div className={styles[`${BLOCK_NAME}-button-wrapper`]}>
          <ButtonAnchor
            href={`/products/${(product_data as any).id}`}
            variant="outlined"
          >
            Show
          </ButtonAnchor>
          <Button onClick={removeDialog.open} theme="danger" variant="outlined">
            Remove
          </Button>
        </div>
      </div>
      <RemoveDialog dialog={removeDialog} cart={cart} />
    </>
  );
};

const List = ({ carts }: { carts: CartDetails }) => {
  const formattedCarts = Object.values(carts).map((cart) => cart);

  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      {formattedCarts.map((cart) => (
        <Item key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export const CartCard = { List, Item };
