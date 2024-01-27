"use client";

import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Tab } from "@/components/elements/Tab";
import { EditDialog } from "@/features/mypage/MypageHeader/components/EditDialog";
import { ProfileCard } from "@/features/mypage/MypageHeader/components/ProfileCard";
import type { Session } from "next-auth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage-header";

export function MypageHeader({ user }: { user?: Session["user"] }) {
  const editDialog = useDialog();

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <ProfileCard dialog={editDialog} user={user} />
      <EditDialog dialog={editDialog} />
      <Tab
        items={[
          { text: "出品商品", href: "/mypage/post" },
          { text: "購入商品", href: "/mypage/history" },
        ]}
      />
    </div>
  );
}
