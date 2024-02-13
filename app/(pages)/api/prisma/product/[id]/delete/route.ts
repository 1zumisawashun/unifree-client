import { prisma } from "@/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (req.method === "POST") {
    try {
      const product = await prisma.product.delete({
        where: { id: +params.id },
      });

      return NextResponse.json({ id: product.id });
    } catch (err) {
      console.log(err);
      return new NextResponse(`Method Not Allowed`, { status: 405 });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
