import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductCreate } from "@/features/product/ProductCreate";

export default async function Page() {
  return (
    <SubHeader title="Product Create" href="/products">
      <ProductCreate />
    </SubHeader>
  );
}
