"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { EditDialog } from "@/features/mypage/MypageSetting/components/EditDialog";
import { ProfileCard } from "@/features/mypage/MypageSetting/components/ProfileCard";
import { logout } from "@/functions/helpers/firebaseAuth";
import type { Session } from "next-auth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage-setting";

export function MypageSetting({ user }: { user?: Session["user"] }) {
  const editDialog = useDialog();

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <ProfileCard dialog={editDialog} user={user} />
      <ButtonWrapper position="end">
        <Button onClick={logout} theme="danger">Logout</Button>
      </ButtonWrapper>
      <EditDialog dialog={editDialog} />
    </div>
  );
}
