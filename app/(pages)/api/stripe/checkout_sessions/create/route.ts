import { stripe } from "@/functions/libs/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const json = await req.json();
    console.log(json);

    try {
      // dummy
      const line_items = [
        {
          price: "price_1N4x5MEjv771bjTXkgcCTNnH",
          quantity: 2,
        },
      ];

      const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items,
        success_url: `${headers().get("origin")}/cart/thankyou`,
        cancel_url: `${headers().get("origin")}/`,
      });

      return NextResponse.json({ sessionId: checkoutSession.id });
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      return new NextResponse(`${errorMessage}`, { status: 500 });
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 });
  }
}
