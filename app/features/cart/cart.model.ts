import { z } from 'zod'

export const zPrice = z.string()

export const zPrices = z.array(zPrice)

export type Price = z.infer<typeof zPrice>

export type Prices = z.infer<typeof zPrices>
