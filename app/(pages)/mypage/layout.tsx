import { Tab } from "@/components/elements/Tab";
import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { SubHeader } from "@/components/layouts/SubHeader";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <LayoutContainer>
        <SubHeader title="Mypage" href="/">
          <Tab
            items={[
              { text: "出品商品", href: "/mypage/post" },
              { text: "購入商品", href: "/mypage/history" },
              { text: "設定", href: "/mypage/setting" },
            ]}
          />
          {children}
        </SubHeader>
      </LayoutContainer>
    </>
  );
}
