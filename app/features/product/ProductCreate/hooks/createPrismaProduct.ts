'use server'

import { prisma } from '@/functions/libs/prisma'
import { auth } from '@/functions/helpers/nextAuth/server'

type Props = {
  stripeProductId: string
  stripePriceId: string
  images: {
    name: string
    src: string
  }[]
  name: string
  price: number
  description: string
  status: string
  paymentMethod: string
  categories: number[]
}

export async function createPrismaProduct({
  images,
  categories,
  ...rest
}: Props) {
  const { session } = await auth()

  const data = {
    ...rest,
    active: true,
    images: {
      create: images
    },
    categories: {
      connect: categories.map((category) => ({ id: category }))
    },
    user: {
      connect: { id: session!.user.id }
    }
  }
  try {
    const product = await prisma.product.create({ data })
    if (!product) throw new Error('Product not created')

    return { ok: true }
  } catch (err) {
    console.log(err)
    return { ok: false }
  }
}
