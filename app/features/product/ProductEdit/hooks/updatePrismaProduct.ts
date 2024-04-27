'use server'

import { prisma } from '@/functions/libs/prisma'

type Params = {
  name: string
  price: number
  categories: number[]
  images: {
    name: string
    src: string
  }[]
  description: string
  paymentMethod: string
  status: string
}

export async function updatePrismaProduct({
  id,
  params
}: {
  id: number
  params: Params
}) {
  const { images, categories, ...rest } = params

  const data = {
    ...rest,
    images: {
      // one-to-many disconnect
      deleteMany: {},
      // one-to-many connect
      create: images
    },
    categories: {
      // many-to-many disconnect
      set: [],
      // many-to-many connect
      connect: categories.map((category) => ({ id: category }))
    }
  }

  try {
    const product = await prisma.product.update({
      where: { id },
      data
    })
    if (!product) throw new Error('Product not updated')
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false }
  }
}
