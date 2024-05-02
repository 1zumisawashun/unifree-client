import { ProductCard } from '@/features/product/components/ProductCard'
import { Product } from '@/functions/types/Prisma'

export const MypagePost = ({ products }: { products: Product[] }) => {
  return <ProductCard.List products={products} />
}
