import { MypageSetting } from "@/features/mypage/MypageSetting";
import { auth } from "@/functions/helpers/nextAuth/server";
import { prisma } from "@/functions/libs/prisma";

export default async function Page() {
  const { session } = await auth();

  const user = await prisma.user.findFirstOrThrow({
    where: { id: session!.user.id },
    include: { matches: true, products: true },
  });

  return <MypageSetting user={user} />;
}
