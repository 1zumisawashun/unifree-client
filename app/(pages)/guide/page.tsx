import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { Guide } from "@/features/guide";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <SubHeader title="Guidance" href="/">
          <Guide />
        </SubHeader>
      </LayoutContainer>
    </>
  );
}
