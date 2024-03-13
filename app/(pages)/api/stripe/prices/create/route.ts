import { stripe } from '@/functions/libs/stripe'
import { NextRequest, NextResponse } from 'next/server'

type Json = {
  name: string
  price: number
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const json = (await req.json()) as Json
    // zod perseすること

    try {
      const price = await stripe.prices.create({
        currency: 'jpy',
        unit_amount: json.price,
        product_data: {
          name: json.name
        }
      })

      return NextResponse.json({
        stripePriceId: price.id,
        stripeProductId: price.product
      })
    } catch (err) {
      console.log(err)
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      return new NextResponse(`${errorMessage}`, { status: 500 })
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 })
  }
}
