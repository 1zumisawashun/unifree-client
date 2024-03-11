import { ProductDetail } from "@/features/product/ProductDetail";
import { prismaProductFindUnique } from "@/features/product/hooks/prismaProductFindUnique";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await prismaProductFindUnique({ params });

  return <ProductDetail product={product} />;
}
