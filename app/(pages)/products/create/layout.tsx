import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SubHeader title="Product Create" href="/products">
        {children}
      </SubHeader>
    </LayoutContainer>
  );
}
