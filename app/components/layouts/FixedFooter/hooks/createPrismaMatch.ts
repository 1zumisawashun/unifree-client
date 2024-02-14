"use server";

import { prisma } from "@/functions/libs/prisma";
import { revalidatePath } from "next/cache";

type Props = {
  currentUserId: number;
  opponentUserId: number;
  name: string;
};

// use-transitionを使ったserver-actionsの例
export async function createPrismaMatch({
  currentUserId,
  opponentUserId,
  name,
}: Props) {
  try {
    const response = await prisma.match.create({
      data: {
        name,
        users: {
          connect: [
            {
              id: currentUserId,
            },
            { id: opponentUserId },
          ],
        },
      },
    });
    console.log(response);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  } finally {
    revalidatePath("/");
  }
}

// import { API } from "@/functions/constants/api";

// type Props = {
//   currentUserId: number;
//   opponentUserId: number;
//   name: string;
// };

// export async function createPrismaMatch({
//   currentUserId,
//   opponentUserId,
//   name,
// }: Props) {
//   const url = API.createPrismaMatch;

//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify({ currentUserId, opponentUserId, name }),
//   });

//   return response.ok;
// }
