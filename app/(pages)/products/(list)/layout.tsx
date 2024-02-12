import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { SearchBar } from "@/features/product/ProductList/components/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LayoutContainer>
        <SubHeader title="Product List" href="/">
          <SearchBar />
          {children}
        </SubHeader>
      </LayoutContainer>
    </>
  );
}
