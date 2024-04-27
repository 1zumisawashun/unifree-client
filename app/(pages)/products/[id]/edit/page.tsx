import { ProductEdit } from '@/features/product/ProductEdit'
import { auth } from '@/functions/helpers/nextAuth/server'
import { prisma } from '@/functions/libs/prisma'

export default async function Page({ params }: { params: { id: string } }) {
  const { session } = await auth()

  const isAdmin = session?.user.isAdmin

  const categories = await prisma.category.findMany(
    isAdmin
      ? undefined
      : {
          where: { name: { not: 'PR' } }
        }
  )

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name
  }))

  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true }
  })

  const productEntity = {
    name: product.name,
    price: product.price.toString(),
    description: product.description,
    files: product.images,
    status: product.status,
    paymentMethod: product.paymentMethod!,
    categories: product.categories.map((category) => category.id.toString())
  }

  return (
    <ProductEdit
      productEntity={productEntity}
      categoryOptions={categoryOptions}
      id={product.id}
    />
  )
}
