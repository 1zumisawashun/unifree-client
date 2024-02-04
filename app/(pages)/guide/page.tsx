import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Guide } from "@/features/guide";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Guide />
      </LayoutContainer>
    </>
  );
}
