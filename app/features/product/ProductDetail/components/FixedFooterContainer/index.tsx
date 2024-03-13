import { FixedFooter } from '@/features/product/ProductDetail/components/FixedFooter'
import env from '@/functions/libs/env'
import { prisma } from '@/functions/libs/prisma'
import 'server-only'

export async function FixedFooterContainer({
  userId,
  productId
}: {
  userId: number
  productId: string
}) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      matches: { select: { productId: true, id: true } }
    }
  })

  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +productId },
    include: { user: true, images: true, categories: true }
  })

  const matchId = user.matches.find(
    (match) => match.productId === product.id
  )?.id

  return (
    <FixedFooter
      product={product}
      currentUserId={userId}
      matchId={matchId}
      isProduction={env.isProduction}
    />
  )
}
