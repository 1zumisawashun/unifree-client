import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SearchBar } from "@/components/layouts/SearchBar";
import { SubHeader } from "@/components/layouts/SubHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SubHeader title="Product List" href="/">
        <SearchBar />
        {children}
      </SubHeader>
    </LayoutContainer>
  );
}
