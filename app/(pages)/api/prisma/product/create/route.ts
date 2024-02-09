import { authOptions } from "@/functions/libs/nextAuth";
import { prisma } from "@/functions/libs/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type Json = {
  stripeProductId: string;
  stripePriceId: string;
  images: {
    name: string;
    src: string;
  }[];
  name: string;
  price: number;
  description: string;
  status: string;
  paymentMethod: string;
  categories: number[];
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (req.method === "POST") {
    const json: Json = await req.json();
    const { images, categories, ...rest } = json;

    const data: any = {
      ...rest,
      active: true,
      images: {
        create: images,
      },
      categories: {
        connect: categories.map((category) => ({ id: category })),
      },
      user: {
        connect: { id: session!.user.id },
      },
    };
    try {
      const product = await prisma.product.create({ data });

      return NextResponse.json({ id: product.id });
    } catch (err) {
      console.log(err);
      return new NextResponse(`Method Not Allowed`, { status: 405 });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
