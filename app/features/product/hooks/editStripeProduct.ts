import { API } from "@/functions/constants/api";

export async function editStripeProduct({
  stripe_price_id,
}: {
  stripe_price_id: string;
}) {
  const url = API.editStripePrices(stripe_price_id);

  // 削除でなくactiveをfalseにして削除した風に見せかける
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({}),
  });
  const json = await response.json();
  return json;
}
