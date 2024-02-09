import { API } from "@/functions/constants/api";

const url = API.createPrismaMatch;

type Ids = {
  currentUserId: number;
  opponentUserId: number;
};

export async function createMatchRoom({ currentUserId, opponentUserId }: Ids) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ currentUserId, opponentUserId }),
  });
  const json = await response.json();
  return json;
}
