import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductList } from "@/features/product/ProductList";

export default async function Page() {
  return (
    <SubHeader title="Product List" href="/">
      <ProductList />
    </SubHeader>
  );
}
