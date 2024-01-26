import { Header } from "@/components/layouts/Header";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";
import { Tab } from "@/components/layouts/Tab";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import "server-only";
import styles from "./layout.module.scss";

const BLOCK_NAME = "mypage";

/* eslint-disable @next/next/no-img-element */
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
          {session && (
            <div className={styles[`${BLOCK_NAME}-wrapper`]}>
              <img
                src={session.user.image ?? undefined}
                className={styles[`${BLOCK_NAME}-avatar`]}
                alt=""
              />
              <div className={styles[`${BLOCK_NAME}-content`]}>
                <p className={styles[`${BLOCK_NAME}-name`]}>
                  {session.user.name ?? "泉澤俊"}
                </p>
                <div className={styles[`${BLOCK_NAME}-text-wrapper`]}>
                  <p className={styles[`${BLOCK_NAME}-text`]}>出品数:2</p>
                  <p className={styles[`${BLOCK_NAME}-text`]}>購入数:4</p>
                </div>
              </div>
            </div>
          )}
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
