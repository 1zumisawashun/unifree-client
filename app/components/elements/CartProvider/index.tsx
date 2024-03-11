'use client'

import { CartProvider as CartRowProvider } from 'use-shopping-cart'

const stripeKey = process.env['NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'] as string

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartRowProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="JPY"
      shouldPersist
    >
      {children}
    </CartRowProvider>
  )
}
