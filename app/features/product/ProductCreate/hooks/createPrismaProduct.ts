import { API } from "@/functions/constants/api";

export async function createPrismaProduct({ params }: { params: any }) {
  const url = API.createPrismaProduct;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
  });

  return response.ok;
}
