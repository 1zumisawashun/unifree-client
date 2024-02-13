import { API } from "@/functions/constants/api";

type Props = {
  userId: number;
  matchId: number;
  message: string;
};

export async function createPrismaMessage({ userId, matchId, message }: Props) {
  const url = API.createPrismaMessage;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ userId, matchId, message }),
  });

  return response.ok;
}
