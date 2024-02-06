import { MypagePost } from "@/features/mypage/MypagePost";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  // FIXME:投稿商品をフェッチする
  const products = await prisma.product.findMany({
    include: { user: true, images: true, categories: true },
  });

  return <MypagePost products={products} />;
}
