'use server'

import { prisma } from '@/functions/libs/prisma'

type Props = {
  id: number
}

export async function deletePrismaProduct({ id }: Props) {
  try {
    const category = await prisma.product.delete({ where: { id } })
    if (!category) throw new Error('Product not created')

    return { ok: true }
  } catch (err) {
    console.log(err)
    return { ok: false }
  }
}
