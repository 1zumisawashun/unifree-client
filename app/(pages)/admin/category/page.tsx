import { AdminCategory } from '@/features/admin/category/AdminCategory'
import { prismaCategoryFindMany } from '@/features/admin/category/hooks/prismaCategoryFindMany'

export default async function Page() {
  const categories = await prismaCategoryFindMany()

  return <AdminCategory categories={categories} />
}
