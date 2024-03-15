import { AdminCategory } from '@/features/admin/AdminCategory'
import { prismaCategoryFindMany } from '@/features/admin/hooks/prismaCategoryFindMany'

export default async function Page() {
  const categories = await prismaCategoryFindMany()

  return <AdminCategory categories={categories} />
}
