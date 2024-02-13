import { ProductCard } from "@/features/product/components/ProductCard";
import { Product } from "@/functions/types/Prisma";
import "server-only";

export const MypagePost = ({ products }: { products: Product[] }) => {
  return <ProductCard.List products={products} />;
};
