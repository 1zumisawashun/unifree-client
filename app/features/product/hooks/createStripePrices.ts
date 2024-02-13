import { API } from "@/functions/constants/api";
import { UpsertProduct } from "@/functions/models/Products";

type StripeIds = {
  stripeProductId: string;
  stripePriceId: string;
};

type Props = {
  name: UpsertProduct["name"];
  price: UpsertProduct["price"];
};

export async function createStripePrices({ name, price }: Props) {
  const url = API.createStripePrices;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name, price: +price }),
  });

  const stripeIds: StripeIds = await response.json();
  return stripeIds;
}
