import { ProductEdit } from '@/features/product/ProductEdit'
import { prisma } from '@/functions/libs/prisma'

export default async function Page({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true }
  })

  return <ProductEdit product={product} />
}
