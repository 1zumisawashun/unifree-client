import { MatchDetail } from "@/features/match/MatchDetail";
import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  const match = await prisma.match.findUniqueOrThrow({
    where: { id: +params.id },
    include: { messages: { include: { user: true } } },
  });

  const props = {
    matchId: match.id,
    userId: session!.user.id,
    messages: match.messages,
  };

  return <MatchDetail {...props} />;
}
