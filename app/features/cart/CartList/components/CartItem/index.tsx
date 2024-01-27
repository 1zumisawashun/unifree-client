"use client";

import { Button, ButtonAnchor } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { RemoveDialog } from "@/features/cart/CartList/components/RemoveDialog";
import { CartItem as ICartItem } from "@/functions/constants/cart";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import styles from "./styles.module.scss";

type Props = {
  cart: ICartItem;
};

const BLOCK_NAME = "cart-item";

/* eslint-disable @next/next/no-img-element */
export const CartItem: React.FC<Props> = ({ cart }) => {
  const { id, name, image, price } = cart;

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
          <ButtonAnchor href={`/books/${id}`} variant="outlined">
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
