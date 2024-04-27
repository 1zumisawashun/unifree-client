'use server'

import { auth } from '@/functions/helpers/nextAuth/server'
import env from '@/functions/libs/env'
import { stripe } from '@/functions/libs/stripe'
import { LineItem } from '@/functions/types/Stripe'

export async function createStripeCheckoutSessions({
  list_items,
  productIds
}: {
  list_items: LineItem[]
  productIds: number[]
}) {
  const { session } = await auth()

  if (!session) return null

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    client_reference_id: session.user.uid,
    metadata: {
      productIds: JSON.stringify(productIds)
    },
    line_items: list_items,
    mode: 'payment',
    success_url: `${env.NEXT_PUBLIC_API_BASE_URL}/cart/thankyou?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_API_BASE_URL}/`
  })

  return checkoutSession
}
