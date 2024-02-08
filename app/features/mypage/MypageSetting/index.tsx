"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Divider } from "@/components/elements/Divider";
import { EditDialog } from "@/features/mypage/MypageSetting/components/EditDialog";
import { LogoutDialog } from "@/features/mypage/MypageSetting/components/LogoutDialog";
import { MypageSettingContainer } from "@/features/mypage/MypageSetting/components/MypageSettingContainer";
import { ProfileCard } from "@/features/mypage/MypageSetting/components/ProfileCard";
import { User } from "@/functions/types/Prisma";

export function MypageSetting({ user }: { user: User }) {
  const editDialog = useDialog();
  const logoutDialog = useDialog();

  return (
    <MypageSettingContainer>
      <ProfileCard dialog={editDialog} user={user} />
      <Divider />

      <ButtonWrapper position="end">
        <Button onClick={logoutDialog.open} theme="danger" variant="outlined">
          Logout
        </Button>
      </ButtonWrapper>

      <EditDialog dialog={editDialog} />
      <LogoutDialog dialog={logoutDialog} />
    </MypageSettingContainer>
  );
}
