import { EmptyFallback } from "@/components/elements/EmptyFallback";
import { MypageMatch } from "@/features/mypage/MypageMatch";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session!.user.id },
    include: { matches: { include: { users: true, messages: true } } },
  });

  const rows = user.matches.map((match, index) => {
    const hasMessage = match.messages.length !== 0;
    const latestMessage = match.messages.reverse()[0]?.message ?? "";

    return {
      id: index + 1,
      title: match.name,
      annotation: hasMessage ? latestMessage : "no messages",
      href: `/matches/${match.id}`,
    };
  });

  const hasMatches = rows.length > 0;

  if (hasMatches) {
    return <MypageMatch rows={rows} />;
  }
  return <EmptyFallback />;
}
