import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { IndexList } from "@/features/index";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <IndexList />
      </LayoutContainer>
    </>
  );
}
