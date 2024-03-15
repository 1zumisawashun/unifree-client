'use server'

import { prisma } from '@/functions/libs/prisma'

type Props = {
  id: number
}

export async function deletePrismaCategory({ id }: Props) {
  try {
    const category = await prisma.category.delete({ where: { id } })
    if (!category) throw new Error('Product not created')

    return { ok: true }
  } catch (err) {
    console.log(err)
    return { ok: false }
  }
}
