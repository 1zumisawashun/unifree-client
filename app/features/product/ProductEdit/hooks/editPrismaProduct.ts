import { API } from "@/functions/constants/api";
import { Product } from "@/functions/types/Prisma";

export async function editPrismaProduct({
  product,
  params,
}: {
  product: Product;
  params: any;
}) {
  const url = API.editPrismaProduct(product.id);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
  });

  return response.ok;
}
