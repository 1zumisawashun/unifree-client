import { FixedFooter } from "@/components/layouts/FixedFooter";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { ProductDetail } from "@/features/product/ProductDetail";
import { products } from "@/functions/constants/products";

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);

  return (
    <>
      <Header />
      <LayoutContainer hasFooter>
        <SubHeader title="Product Item" href="/products">
          <ProductDetail product={product!} />
        </SubHeader>
      </LayoutContainer>
      <FixedFooter product={product!} />
    </>
  );
}
