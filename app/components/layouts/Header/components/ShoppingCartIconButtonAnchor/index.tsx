'use client'

import { IconButtonAnchor } from '@/components/buttons'
import { Badge } from '@/components/elements/Badge'
import { useShoppingCart } from 'use-shopping-cart'

export function ShoppingCartIconButtonAnchor() {
  const { cartCount } = useShoppingCart()

  return (
    <Badge count={cartCount ?? 0}>
      <IconButtonAnchor
        name="shopping-cart"
        href={'/cart'}
        variant="outlined"
      />
    </Badge>
  )
}
