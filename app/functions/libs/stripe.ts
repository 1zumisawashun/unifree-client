import env from '@/functions/libs/env'
import 'server-only'
import Stripe from 'stripe'

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2023-10-16'
  // appInfo: {
  //   name: 'projectname',
  //   url: 'http://localhost:3000/'
  // }
})
