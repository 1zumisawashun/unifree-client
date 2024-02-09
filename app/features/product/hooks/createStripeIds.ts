import { API } from "@/functions/constants/api";
import { UpsertProduct } from "@/functions/models/Products";

const url = API.createStripePrices;

type StripeIds = {
  stripeProductId: string;
  stripePriceId: string;
};

export async function createStripeIds({
  name,
  price,
}: {
  name: UpsertProduct["name"];
  price: UpsertProduct["price"];
}) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name, price: +price }),
  });
  const stripeIds: StripeIds = await response.json();
  return stripeIds;
}
