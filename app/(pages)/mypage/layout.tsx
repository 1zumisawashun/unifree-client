import { TabButton } from "@/components/elements/Tab";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";
import { mypageRoutes } from "@/functions/helpers/getRoutes";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = mypageRoutes();
  return (
    <>
      <Header />
      <LayoutContainer>
        <SubHeader title="Mypage" href="/">
          <TabButton items={routes} />
          {children}
        </SubHeader>
      </LayoutContainer>
    </>
  );
}
