import { API } from "@/functions/constants/api";

const url = API.createPrismaMessage;

type Props = {
  userId: number;
  matchId: number;
  message: string;
};

export async function createMessage({ userId, matchId, message }: Props) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ userId, matchId, message }),
  });
  const json = await response.json();
  return json;
}
