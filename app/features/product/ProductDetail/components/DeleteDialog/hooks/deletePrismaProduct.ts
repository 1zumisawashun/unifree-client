import { API } from '@/functions/constants/api'
import { Product } from '@/functions/types/Prisma'

export async function deletePrismaProduct({ product }: { product: Product }) {
  const url = API.deletePrismaProduct(product.id)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({})
  })

  return response.ok
}
