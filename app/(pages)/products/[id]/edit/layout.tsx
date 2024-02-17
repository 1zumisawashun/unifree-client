import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { Metadata } from "next";

const title = "Product Edit";

export const metadata: Metadata = {
  title: `unifree-client | ${title}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SubHeader title={title} href="/products">
        {children}
      </SubHeader>
    </LayoutContainer>
  );
}
