import { MatchDetail } from "@/features/match/MatchDetail";
import { prisma } from "@/functions/libs/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const match = await prisma.match.findUniqueOrThrow({
    where: { id: +params.id },
    include: { messages: true },
  });

  console.log(match);

  return <MatchDetail />;
}
