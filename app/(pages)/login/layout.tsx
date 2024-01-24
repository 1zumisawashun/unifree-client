import { LayoutCenter } from "@/components/layouts/LayoutCenter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutCenter>{children}</LayoutCenter>
    </>
  );
}
