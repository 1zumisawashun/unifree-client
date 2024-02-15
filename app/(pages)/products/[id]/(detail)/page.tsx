import { ProductDetail } from "@/features/product/ProductDetail";
import { prisma } from "@/functions/libs/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true },
  });

  return <ProductDetail product={product} />;
}
