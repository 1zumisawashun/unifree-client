import { API } from '@/functions/constants/api'

export async function updateStripePrices({
  stripePriceId
}: {
  stripePriceId: string
}) {
  const url = API.updateStripePrices(stripePriceId)

  // 削除でなくactiveをfalseにして削除した風に見せかける
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({})
  })

  return response.ok
}
