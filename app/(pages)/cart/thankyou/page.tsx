import { CartThankyou } from '@/features/cart/CartThankyou'
import { retrieveStripeCheckoutSessions } from '@/features/cart/CartThankyou/hooks/retrieveStripeCheckoutSessions'
import { SearchParams } from '@/functions/types/Common'

export default async function Page({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const session_id = searchParams['session_id'] as string
  const session = await retrieveStripeCheckoutSessions({ session_id })

  const ids = session.metadata!['productIds']

  if (ids) {
    const parsedIds = JSON.parse(ids)
    // update purchase history
    console.log(parsedIds)
  }

  return <CartThankyou />
}
