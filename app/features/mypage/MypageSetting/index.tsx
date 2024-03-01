"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Divider } from "@/components/elements/Divider";
import { Panel } from "@/components/elements/Panel";
import { EditDialog } from "@/features/mypage/MypageSetting/components/EditDialog";
import { LogoutDialog } from "@/features/mypage/MypageSetting/components/LogoutDialog";
import { ProfileCard } from "@/features/mypage/MypageSetting/components/ProfileCard";
import { User } from "@/functions/types/Prisma";

export function MypageSetting({ user }: { user: User }) {
  const editDialog = useDialog();
  const logoutDialog = useDialog();

  const userEntity = {
    university: user.university ?? "",
    displayName: user.displayName ?? "",
    faculty: user.faculty ?? "",
    department: user.department ?? "",
  };

  return (
    <Panel.Flame hasBorder>
      <Panel.Inner>
        <ProfileCard dialog={editDialog} user={user} />
        <Divider />

        <ButtonWrapper position="end">
          <Button onClick={logoutDialog.open} theme="danger" variant="outlined">
            ログアウト
          </Button>
        </ButtonWrapper>

        <EditDialog dialog={editDialog} user={userEntity} userId={user.id} />
        <LogoutDialog dialog={logoutDialog} />
      </Panel.Inner>
    </Panel.Flame>
  );
}
