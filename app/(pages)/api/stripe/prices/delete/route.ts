import { stripe } from "@/functions/libs/stripe";
import { zPrices } from "@/functions/models/Cart";
import { NextRequest, NextResponse } from "next/server";

/**
 * stripe.prices.deleteメソッドは存在しないのでactiveプロパティで削除したように見せる
 * 本当に削除したい場合はstripe.products.deleteメソッドを使う
 * @see https://github.com/stripe/stripe-node/issues/916
 */
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const prices = await req.json();

    try {
      const parsedPrices = zPrices.parse(prices);

      const updating = parsedPrices.map(async (price) => {
        return await stripe.prices.update(price, {
          active: false,
        });
      });

      const results = Promise.all(updating);

      return NextResponse.json({ results });
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
