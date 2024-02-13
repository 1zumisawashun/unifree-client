import { LayoutContainer } from "@/components/layouts/LayoutContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
