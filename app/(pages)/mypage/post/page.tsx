import { ErrorEmpty } from "@/components/elements/ErrorFallback";
import { MypagePost } from "@/features/mypage/MypagePost";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session!.user.id },
    include: {
      products: { include: { images: true, categories: true, user: true } },
    },
  });

  const hasProducts = user.products.length > 0;

  if (hasProducts) {
    return <MypagePost products={user.products} />;
  }
  return <ErrorEmpty />;
}
