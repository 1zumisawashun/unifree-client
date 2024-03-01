import { EmptyFallback } from "@/components/elements/EmptyFallback";
import { ProductList } from "@/features/product/ProductList";
import { prisma } from "@/functions/libs/prisma";
import { SearchParams } from "@/functions/types/Common";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const name = searchParams["name"] as string;
  const categories = searchParams["category"] as string;

  const where = () => {
    if (!!name) {
      return { name: { contains: name } };
    }
    if (!!categories) {
      return { categories: { some: { name: { contains: categories } } } };
    }
    return {};
  };

  const products = await prisma.product.findMany({
    where: where(),
    orderBy: { createdAt: "desc" },
    include: { user: true, images: true, categories: true },
  });

  const hasProducts = products.length > 0;

  if (hasProducts) {
    return <ProductList products={products} />;
  }
  return <EmptyFallback />;
}
