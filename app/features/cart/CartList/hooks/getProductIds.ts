import { CartDetails, CartRowDetails } from '@/functions/types/Cart'

export function getProductIds({
  cartDetails
}: {
  cartDetails?: CartRowDetails
}) {
  const list_items = Object.values((cartDetails as CartDetails) ?? {}).map(
    (cart) => {
      return cart.product_data.id
    }
  )
  return list_items
}
