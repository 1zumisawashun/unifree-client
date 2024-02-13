import { FixedFooter } from "@/components/layouts/FixedFooter";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductDetail } from "@/features/product/ProductDetail";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id;

  const product = await prisma.product.findUniqueOrThrow({
    where: { id: +params.id },
    include: { user: true, images: true, categories: true },
  });

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      matches: { select: { name: true, id: true } },
    },
  });

  // FIXME:nameではなくproductIdに変えたい
  const matchId = user.matches.find((match) => match.name === product.name)?.id;

  return (
    <>
      <LayoutContainer hasFooter>
        <SubHeader title="Product Item" href="/products">
          <ProductDetail product={product} />
        </SubHeader>
      </LayoutContainer>
      {userId && (
        <FixedFooter
          product={product}
          currentUserId={userId}
          matchId={matchId}
        />
      )}
    </>
  );
}
