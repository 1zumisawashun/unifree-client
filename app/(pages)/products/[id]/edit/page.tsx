import { ProductEdit } from '@/features/product/ProductEdit'
import { prisma } from '@/functions/libs/prisma'

export default async function Page({ params }: { params: { id: string } }) {
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

  const categories = await prisma.category.findMany()

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name
  }))

  return (
    <ProductEdit
      productEntity={productEntity}
      categoryOptions={categoryOptions}
      id={product.id}
    />
  )
}
