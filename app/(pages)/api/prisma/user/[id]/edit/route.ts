import { prisma } from "@/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

type Json = {
  displayName: string | null;
  university: string | null;
  faculty: string | null;
  department: string | null;
};

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (req.method === "POST") {
    const json: Json = await req.json();
    try {
      const user = await prisma.user.update({
        where: { id: +params.id },
        data: json,
      });

      return NextResponse.json({ id: user.id });
    } catch (err) {
      return new NextResponse(`Method Not Allowed`, { status: 405 });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
