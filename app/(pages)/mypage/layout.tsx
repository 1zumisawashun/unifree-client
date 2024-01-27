import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Tab } from "@/components/layouts/Tab";
import { MypageProfileHeader } from "@/features/mypage/MypageProfileHeader";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import "server-only";
import styles from "./layout.module.scss";

const BLOCK_NAME = "mypage";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header />
      <LayoutContainer>
        <div className={styles[`${BLOCK_NAME}-container`]}>
          <MypageProfileHeader user={session?.user} />
          <Tab
            items={[
              { text: "出品商品", href: "/mypage/post" },
              { text: "購入商品", href: "/mypage/history" },
            ]}
          ></Tab>
        </div>
        {children}
      </LayoutContainer>
    </>
  );
}
