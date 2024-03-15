import { AdminCategory } from '@/features/admin/AdminCategory'
import { prisma } from '@/functions/libs/prisma'

export default async function Page() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return <AdminCategory categories={categories} />
}
