import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductList } from "@/features/product/ProductList";
import { prisma } from "@/functions/libs/prisma";

type Props = {
  params: {
    term: string;
  };
};

export default async function Page({ params: { term } }: Props) {
  const products = await prisma.product.findMany({
    where: { name: { contains: term } },
    include: { user: true, images: true, categories: true },
  });

  return (
    <SubHeader title="Result List" href="/">
      <ProductList products={products} />
    </SubHeader>
  );
}
