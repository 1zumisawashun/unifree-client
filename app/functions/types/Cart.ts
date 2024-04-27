import { Prettify } from '@/functions/types/Utility'
import type { CartEntry as CartRowEntry } from 'use-shopping-cart/core'
export type { CartDetails as CartRowDetails } from 'use-shopping-cart/core'

export type CartDetails = {
  [id: string]: CartEntry
}

export type CartEntry = Prettify<CartRowEntry> & {
  product_data: {
    id: number
    description: string
  }
}
