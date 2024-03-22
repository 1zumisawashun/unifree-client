'use client'

import { Button, ButtonAnchor, ButtonWrapper } from '@/components/buttons'
import { Divider } from '@/components/elements/Divider'
import { EmptyFallback } from '@/components/elements/EmptyFallback'
import { CartCard } from '@/features/cart/CartList/components/CartCard'
import { createStripeCheckoutSessions } from '@/features/cart/CartList/hooks/createStripeCheckoutSessions'
import { getListItems } from '@/features/cart/CartList/hooks/getListItems'
import { getProductIds } from '@/features/cart/CartList/hooks/getProductIds'
import { formatCurrencyString } from '@/functions/helpers/formatNumber'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { CartDetails } from '@/functions/types/Cart'
import { useShoppingCart } from 'use-shopping-cart'
import styles from './styles.module.scss'

const BLOCK_NAME = 'cart'

export function Cart() {
  const { cartDetails, totalPrice } = useShoppingCart()
  const { isPending, serverAction } = useServerAction()

  const buy = async () => {
    const list_items = getListItems({ cartDetails })
    const productIds = getProductIds({ cartDetails })
    try {
      const response = await serverAction(() =>
        createStripeCheckoutSessions({ list_items, productIds })
      )

      if (!response) throw new Error()

      window.location.href = response.url!
    } catch (error) {
      console.log(error)
    }
  }

  if (!totalPrice) return <EmptyFallback />

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <CartCard.List carts={cartDetails as any as CartDetails} />
      <Divider />
      <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
        <p>合計</p>
        <p>{formatCurrencyString(totalPrice)}</p>
      </div>
      <p className={styles[`${BLOCK_NAME}-text`]}>
        「レジに進む」押下後に決済ページへ遷移します。
      </p>
      <ButtonWrapper direction="column">
        <Button
          onClick={buy}
          className={styles[`${BLOCK_NAME}-button`]}
          loading={isPending}
        >
          レジに進む
        </Button>
        <ButtonAnchor
          href="/products"
          variant="outlined"
          className={styles[`${BLOCK_NAME}-button`]}
        >
          買い物を続ける
        </ButtonAnchor>
      </ButtonWrapper>
    </div>
  )
}
