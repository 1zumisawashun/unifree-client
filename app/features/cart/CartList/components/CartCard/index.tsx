"use client";

import { Button, ButtonAnchor, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Panel } from "@/components/elements/Panel";
import { RemoveDialog } from "@/features/cart/CartList/components/RemoveDialog";
import { CartDetails, CartItem as ICartItem } from "@/functions/constants/cart";
import { formatCurrencyString } from "@/functions/helpers/formatNumber";
import styles from "./styles.module.scss";

const BLOCK_NAME = "cart-card";

/* eslint-disable @next/next/no-img-element */
const Item = ({ cart }: { cart: ICartItem }) => {
  const {
    name,
    image,
    price,
    product_data: { id },
  } = cart;

  const removeDialog = useDialog();
  return (
    <Panel.Flame hasBorder>
      <Panel.Inner>
        <div className={styles[`${BLOCK_NAME}-container`]}>
          <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
            <img className={styles[`${BLOCK_NAME}-image`]} src={image} alt="" />
          </div>
          <div className={styles[`${BLOCK_NAME}-content`]}>
            <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
            <p className={styles[`${BLOCK_NAME}-price`]}>
              {formatCurrencyString(price)}
            </p>
            <ButtonWrapper>
              <ButtonAnchor
                href={`/products/${id}`}
                variant="outlined"
                size="small"
              >
                詳細
              </ButtonAnchor>
              <Button
                onClick={removeDialog.open}
                theme="danger"
                variant="outlined"
                size="small"
              >
                削除
              </Button>
            </ButtonWrapper>
          </div>
        </div>
        <RemoveDialog dialog={removeDialog} cart={cart} />
      </Panel.Inner>
    </Panel.Flame>
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
