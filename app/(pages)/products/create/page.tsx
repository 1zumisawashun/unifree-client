import { ProductCreate } from '@/features/product/ProductCreate'
import { prisma } from '@/functions/libs/prisma'

export default async function Page() {
  const categories = await prisma.category.findMany()

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name
  }))

  return <ProductCreate categoryOptions={categoryOptions} />
}
