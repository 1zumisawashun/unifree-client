import type Stripe from 'stripe'

export type LineItem = Stripe.Checkout.SessionCreateParams.LineItem
