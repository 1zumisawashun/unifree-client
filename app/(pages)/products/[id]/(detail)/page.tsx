import { FixedFooter } from "@/components/layouts/FixedFooter";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductDetail } from "@/features/product/ProductDetail";
import { prisma } from "@/functions/libs/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true },
  });

  return (
    <>
      <Header />
      <LayoutContainer hasFooter>
        <SubHeader title="Product Item" href="/products">
          <ProductDetail product={product} />
        </SubHeader>
      </LayoutContainer>
      <FixedFooter product={product} />
    </>
  );
}
