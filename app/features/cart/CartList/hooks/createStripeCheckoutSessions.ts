import { API } from "@/functions/constants/api";

export async function createStripeCheckoutSessions({
  params,
}: {
  params: string[];
}) {
  const url = API.createStripeCheckoutSessions;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
  });

  const json = await response.json();
  return json.url;
}
