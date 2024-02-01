import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Tos } from "@/features/tos";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Tos />
      </LayoutContainer>
    </>
  );
}
