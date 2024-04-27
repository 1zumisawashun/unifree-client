'use client'

import { Panel } from '@/components/elements/Panel'
import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import styles from './styles.module.scss'

const BLOCK_NAME = 'cart-thankyou'

/* eslint-disable react-hooks/exhaustive-deps */
export const CartThankyou: React.FC = () => {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <Panel.Flame theme="success">
      <Panel.Inner>
        <h3 className={styles[`${BLOCK_NAME}-title`]}>Thank You For Buying.</h3>
        <p>Hi, Your order has been successfully placed.</p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
