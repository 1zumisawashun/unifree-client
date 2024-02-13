import { API } from "@/functions/constants/api";
import { Product } from "@/functions/types/Prisma";

export async function editStripePrices({ product }: { product: Product }) {
  const url = API.editStripePrices(product.stripePriceId);

  // 削除でなくactiveをfalseにして削除した風に見せかける
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({}),
  });

  return response.ok;
}
