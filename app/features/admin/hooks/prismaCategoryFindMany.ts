import { auth } from '@/functions/helpers/nextAuth/server'
import { prisma } from '@/functions/libs/prisma'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const _prismaCategoryFindMany = async () => {
  const { session } = await auth()

  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' }
  })

  if (!session?.user.isAdmin) {
    return notFound()
  }

  return categories
}

export const prismaCategoryFindMany = cache(_prismaCategoryFindMany)
