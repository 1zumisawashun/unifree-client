"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Divider } from "@/components/elements/Divider";
import { EditDialog } from "@/features/mypage/MypageSetting/components/EditDialog";
import { LogoutDialog } from "@/features/mypage/MypageSetting/components/LogoutDialog";
import { ProfileCard } from "@/features/mypage/MypageSetting/components/ProfileCard";
import { User } from "@/functions/types/Prisma";
import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage-setting-container";

export function MypageSetting({ user }: { user: User }) {
  const editDialog = useDialog();
  const logoutDialog = useDialog();

  return (
    <div className={styles[`${BLOCK_NAME}`]}>
      <ProfileCard dialog={editDialog} user={user} />
      <Divider />

      <ButtonWrapper position="end">
        <Button onClick={logoutDialog.open} theme="danger" variant="outlined">
          Logout
        </Button>
      </ButtonWrapper>

      <EditDialog dialog={editDialog} user={user} />
      <LogoutDialog dialog={logoutDialog} />
    </div>
  );
}
