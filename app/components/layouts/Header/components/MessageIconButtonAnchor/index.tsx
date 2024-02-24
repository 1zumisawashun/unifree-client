import { IconButtonAnchor } from "@/components/buttons";
import { Badge } from "@/components/elements/Badge";
import { auth } from "@/functions/helpers/nextAuth/server";
import { prisma } from "@/functions/libs/prisma";
import "server-only";

export async function MessageIconButtonAnchor() {
  const { session } = await auth();

  // FIXME: 本当はread:falseのみを取得する
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session!.user.id },
    include: { matches: { include: { users: true, messages: true } } },
  });

  const count = user.matches.reduce((acc, match) => {
    return acc + match.messages.length;
  }, 0);

  return (
    <Badge count={count}>
      <IconButtonAnchor
        name="message"
        href={"/mypage/match"}
        variant="outlined"
      />
    </Badge>
  );
}
