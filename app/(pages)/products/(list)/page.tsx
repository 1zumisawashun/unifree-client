import { EmptyFallback } from "@/components/elements/EmptyFallback";
import { ProductList } from "@/features/product/ProductList";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  const products = await prisma.product.findMany({
    include: { user: true, images: true, categories: true },
  });

  const hasProducts = products.length > 0;

  if (hasProducts) {
    return <ProductList products={products} />;
  }
  return <EmptyFallback />;
}
