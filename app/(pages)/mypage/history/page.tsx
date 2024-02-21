import { EmptyFallback } from "@/components/elements/EmptyFallback";
import { MypageHistory } from "@/features/mypage/MypageHistory";
import { auth } from "@/functions/helpers/nextAuth/server";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  const { session } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session!.user.id },
    include: {
      products: { include: { images: true, categories: true, user: true } },
    },
  });

  const hasProducts = user.products.length > 0;

  if (hasProducts) {
    return <MypageHistory products={user.products} />;
  }
  return <EmptyFallback />;
}
