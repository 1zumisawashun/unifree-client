import { Header } from "@/components/layouts/Header";
import { LayoutCenter } from "@/components/layouts/LayoutCenter";
import { Index } from "@/features/index";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutCenter background="index">
        <Index />
      </LayoutCenter>
    </>
  );
}
