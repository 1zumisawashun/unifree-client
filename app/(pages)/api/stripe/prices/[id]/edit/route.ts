import { stripe } from '@/functions/libs/stripe'
import { NextRequest, NextResponse } from 'next/server'

/**
 * stripe.prices.deleteメソッドは存在しないのでactiveプロパティで削除したように見せる
 * 本当に削除したい場合はstripe.products.deleteメソッドを使う
 * @see https://github.com/stripe/stripe-node/issues/916
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (req.method === 'POST') {
    try {
      const response = await stripe.prices.update(params.id, {
        active: false
      })

      return NextResponse.json({ response })
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
