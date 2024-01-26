"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { CartItem as ICartItem } from "@/functions/constants/cart-details";
import { formatCurrencyString } from "@/functions/helpers/formatCurrencyString";
import { useDialog } from "@/functions/hooks/useDialog";
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
      <Dialog ref={removeDialog.ref} close={removeDialog.close}>
        <div className={styles[`${BLOCK_NAME}-modal-body`]}>
          <p className={styles[`${BLOCK_NAME}-modal-text`]}>
            カートから取り除きますか？
          </p>
          <ButtonWrapper position="center">
            <Button
              onClick={removeDialog.close}
              theme="danger"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={() => alert("remove demo")} theme="danger">
              Remove
            </Button>
          </ButtonWrapper>
        </div>
      </Dialog>
    </>
  );
};
