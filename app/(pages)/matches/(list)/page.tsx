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

    const hasMessage = match.messages.length !== 0;
    const latestMessage = match.messages[0]?.message ?? "";

    const title = `${match.name} （${opponent?.displayName ?? "匿名"}）`;

    return {
      id: index + 1,
      title,
      annotation: hasMessage ? latestMessage : "no messages",
      href: `/matches/${match.id}`,
    };
  });

  return <MatchList rows={rows} />;
}
