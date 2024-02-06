import { MypageHistory } from "@/features/mypage/MypageHistory";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  // FIXME:購入履歴をフェッチする
  const products = await prisma.product.findMany({
    include: { user: true, images: true, categories: true },
  });

  return <MypageHistory products={products} />;
}
