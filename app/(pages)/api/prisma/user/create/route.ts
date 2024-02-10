import { prisma } from "@/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

type Json = {
  uid: string;
  photoURL: string | null;
  displayName: string | null;
};

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const json: Json = await req.json();
    try {
      const user = await prisma.user.findFirstOrThrow({
        where: { uid: json.uid },
      });

      return NextResponse.json({ id: user.id });
    } catch (err) {
      const user = await prisma.user.create({
        data: json,
      });
      return NextResponse.json({ id: user.id });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
