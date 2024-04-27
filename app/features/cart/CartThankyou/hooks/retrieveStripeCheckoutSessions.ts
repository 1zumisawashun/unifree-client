import { stripe } from '@/functions/libs/stripe'

export async function retrieveStripeCheckoutSessions({
  session_id
}: {
  session_id: string
}) {
  const session = await stripe.checkout.sessions.retrieve(session_id)
  return session
}
