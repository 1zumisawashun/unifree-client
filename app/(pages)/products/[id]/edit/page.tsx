import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductEdit } from "@/features/product/ProductEdit";
import { products } from "@/functions/constants/products";

export default async function Page() {
  return (
    <SubHeader title="Product Edit" href="/products">
      <ProductEdit product={products[0]!} />
    </SubHeader>
  );
}
