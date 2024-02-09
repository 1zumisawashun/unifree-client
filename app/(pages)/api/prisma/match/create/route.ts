import { prisma } from "@/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

type Json = {
  currentUserId: number;
  opponentUserId: number;
};

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const json: Json = await req.json();

    try {
      const match = await prisma.match.create({
        data: {
          users: {
            connect: [
              {
                id: json.currentUserId,
              },
              { id: json.opponentUserId },
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
