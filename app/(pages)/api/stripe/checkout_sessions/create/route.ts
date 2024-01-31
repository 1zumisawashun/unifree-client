import { stripe } from "@/functions/libs/stripe";
import { zPrices } from "@/functions/models/Cart";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const prices = await req.json();

    try {
      const parsedPrices = zPrices.parse(prices);

      const line_items = parsedPrices.map((price) => ({ price, quantity: 1 }));
      if (line_items.length === 0) throw new Error();

      const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items,
        success_url: `${headers().get("origin")}/cart/thankyou`,
        cancel_url: `${headers().get("origin")}/`,
      });

      return NextResponse.json({ url: checkoutSession.url });
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
