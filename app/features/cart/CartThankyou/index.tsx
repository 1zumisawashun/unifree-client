'use client'

import { LoadingSpinner } from '@/components/elements/LoadingSpinner'
import { Panel } from '@/components/elements/Panel'
import { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import styles from './styles.module.scss'

const BLOCK_NAME = 'cart-thankyou'

/* eslint-disable react-hooks/exhaustive-deps */
export const CartThankyou: React.FC = () => {
  const [isPending, setIsPending] = useState(false)

  const { cartDetails, clearCart } = useShoppingCart()

  // FIXME:本来はwebhookでstripeの更新をしたい
  const update = async () => {
    setIsPending(true)
    try {
      const params = Object.keys(cartDetails ?? {}).map((key) => key)
      console.log(params)
      // FIXME:productを完売状態にする処理
      clearCart()
      setIsPending(false)
    } catch (error) {
      console.log(error)
      setIsPending(false)
    }
  }

  useEffect(() => {
    update()
  }, [])

  if (isPending) return <LoadingSpinner />

  return (
    <Panel.Flame theme="success">
      <Panel.Inner>
        <h3 className={styles[`${BLOCK_NAME}-title`]}>Thank You For Buying.</h3>
        <p>Hi, Your order has been successfully placed.</p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
