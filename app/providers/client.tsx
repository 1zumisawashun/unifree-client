'use client'

import { CartProvider } from '@/components/elements/CartProvider'
import { ToastProvider } from '@/components/elements/ToastProvider'
import { SessionProvider } from 'next-auth/react'

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <ToastProvider>{children}</ToastProvider>
      </CartProvider>
    </SessionProvider>
  )
}
