'use client'

import { Button, ButtonAnchor, ButtonWrapper } from '@/components/buttons'
import { DeleteDialog } from '@/components/elements/DeleteDialog'
import { Panel } from '@/components/elements/Panel'
import { formatCurrencyString } from '@/functions/helpers/formatNumber'
import { useDialog } from '@/functions/hooks/useDialog'
import { CartDetails, CartEntry } from '@/functions/types/Cart'
import { useShoppingCart } from 'use-shopping-cart'
import styles from './styles.module.scss'

const BLOCK_NAME = 'cart-card'

/* eslint-disable @next/next/no-img-element */
const Item = ({ cart }: { cart: CartEntry }) => {
  const {
    name,
    image,
    price,
    product_data: { id, description }
  } = cart

  const dialog = useDialog()
  const { removeItem } = useShoppingCart()

  const submit = () => {
    removeItem(cart.id)
    dialog.close()
  }

  return (
    <Panel.Flame hasBorder>
      <Panel.Inner>
        <div className={styles[`${BLOCK_NAME}-container`]}>
          <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
            <img className={styles[`${BLOCK_NAME}-image`]} src={image} alt="" />
          </div>
          <div className={styles[`${BLOCK_NAME}-content`]}>
            <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
            <p className={styles[`${BLOCK_NAME}-description`]}>{description}</p>
            <p className={styles[`${BLOCK_NAME}-price`]}>
              {formatCurrencyString(price)}
            </p>
            <ButtonWrapper position="end">
              <ButtonAnchor
                href={`/products/${id}`}
                variant="outlined"
                size="small"
              >
                詳細
              </ButtonAnchor>
              <Button
                onClick={dialog.open}
                theme="danger"
                variant="outlined"
                size="small"
              >
                削除
              </Button>
            </ButtonWrapper>
          </div>
        </div>
        <DeleteDialog dialog={dialog} submit={submit} />
      </Panel.Inner>
    </Panel.Flame>
  )
}

const List = ({ carts }: { carts: CartDetails }) => {
  const formattedCarts = Object.values(carts).map((cart) => cart)

  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      {formattedCarts.map((cart) => (
        <Item key={cart.id} cart={cart} />
      ))}
    </div>
  )
}

export const CartCard = { List, Item }
