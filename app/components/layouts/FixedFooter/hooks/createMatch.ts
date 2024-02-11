import { API } from "@/functions/constants/api";

const url = API.createPrismaMatch;

type Props = {
  currentUserId: number;
  opponentUserId: number;
  name: string;
};

export async function createMatch({
  currentUserId,
  opponentUserId,
  name,
}: Props) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ currentUserId, opponentUserId, name }),
  });
  const json = await response.json();
  return json;
}
