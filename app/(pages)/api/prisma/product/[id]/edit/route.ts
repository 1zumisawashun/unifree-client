import { prisma } from "@/functions/libs/prisma";
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

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (req.method === "POST") {
    const json: Json = await req.json();
    const { images, categories, ...rest } = json;

    const data: any = {
      ...rest,
      images: {
        // one-to-many
        deleteMany: {},
        create: images,
      },
      categories: {
        // many-to-many
        set: [],
        connect: categories.map((category) => ({ id: category })),
      },
    };

    try {
      const product = await prisma.product.update({
        where: { id: +params.id },
        data,
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
