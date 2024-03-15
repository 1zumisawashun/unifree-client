'use server'

import { prisma } from '@/functions/libs/prisma'

type Props = {
  name: string
}

export async function createPrismaCategory({ name }: Props) {
  try {
    const category = await prisma.category.create({ data: { name } })
    if (!category) throw new Error('Product not created')

    return { ok: true }
  } catch (err) {
    console.log(err)
    return { ok: false }
  }
}
