import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Metadata } from "next";

const title = "Shopping Cart";

export const metadata: Metadata = {
  title: `UniFli | ${title}`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
