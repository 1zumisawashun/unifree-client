import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductList } from "@/features/product/ProductList";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  const products = await prisma.product.findMany({
    include: { user: true, images: true, categories: true },
  });

  return (
    <SubHeader title="Product List" href="/">
      <ProductList products={products} />
    </SubHeader>
  );
}
