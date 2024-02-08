import { MypageSetting } from "@/features/mypage/MypageSetting";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirstOrThrow({
    where: { id: session!.user.id },
  });

  return <MypageSetting user={user} />;
}
