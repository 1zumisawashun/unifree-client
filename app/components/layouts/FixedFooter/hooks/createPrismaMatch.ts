import { API } from "@/functions/constants/api";

type Props = {
  currentUserId: number;
  opponentUserId: number;
  name: string;
};

export async function createPrismaMatch({
  currentUserId,
  opponentUserId,
  name,
}: Props) {
  const url = API.createPrismaMatch;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ currentUserId, opponentUserId, name }),
  });

  return response.ok;
}
