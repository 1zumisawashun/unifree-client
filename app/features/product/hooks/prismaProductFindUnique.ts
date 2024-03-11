import { prisma } from '@/functions/libs/prisma'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const _prismaProductFindUnique = async ({
  params
}: {
  params: { id: string }
}) => {
  const product = await prisma.product.findUnique({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true }
  })

  if (!product) {
    return notFound()
  }

  return product
}

export const prismaProductFindUnique = cache(_prismaProductFindUnique)
