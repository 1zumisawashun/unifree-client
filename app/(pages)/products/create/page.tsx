import { ProductCreate } from '@/features/product/ProductCreate'
import { auth } from '@/functions/helpers/nextAuth/server'
import { prisma } from '@/functions/libs/prisma'

export default async function Page() {
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

  return <ProductCreate categoryOptions={categoryOptions} />
}
