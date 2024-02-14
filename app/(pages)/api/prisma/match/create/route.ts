import { prisma } from "@/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

type Json = {
  currentUserId: number;
  opponentUserId: number;
  name: string;
};

// server-actionに移行したため使用していない
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const json: Json = await req.json();
    const { name, currentUserId, opponentUserId } = json;

    try {
      const match = await prisma.match.create({
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

      return NextResponse.json({ id: match.id });
    } catch (err) {
      console.log(err);
      return new NextResponse(`Method Not Allowed`, { status: 405 });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
