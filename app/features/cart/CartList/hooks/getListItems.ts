import { CartDetails, CartRowDetails } from '@/functions/types/Cart'

export function getListItems({
  cartDetails
}: {
  cartDetails?: CartRowDetails
}) {
  const list_items = Object.values((cartDetails as CartDetails) ?? {}).map(
    (cart) => {
      return {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: cart.name,
            images: cart.image ? [cart.image] : []
          },
          unit_amount: cart.price
        },
        quantity: 1
      }
    }
  )
  return list_items
}
