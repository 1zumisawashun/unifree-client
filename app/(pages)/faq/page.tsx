import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Faq } from "@/features/faq";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Faq />
      </LayoutContainer>
    </>
  );
}
