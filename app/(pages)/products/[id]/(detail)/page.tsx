import { FixedFooter } from "@/components/layouts/FixedFooter";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductDetail } from "@/features/product/ProductDetail";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  // const user = await prisma.user.findUniqueOrThrow({
  //   where: { id: session!.user.id },
  //   include: { matches: true },
  // });

  const userId = session!.user.id;

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
      <FixedFooter product={product} currentUserId={userId} />
    </>
  );
}
