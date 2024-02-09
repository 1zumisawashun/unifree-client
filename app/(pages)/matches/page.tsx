import { MatchList } from "@/features/match/MatchList";
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
    const opponent = match.users.filter(
      (user) => user.id !== session!.user.id
    )[0];

    return {
      id: index + 1,
      title: opponent?.displayName ?? "匿名",
      annotation:
        match.messages.length === 0
          ? "no messages"
          : match.messages[0]?.message ?? "",
      href: `/matches/${match.id}`,
    };
  });

  return <MatchList rows={rows} />;
}
