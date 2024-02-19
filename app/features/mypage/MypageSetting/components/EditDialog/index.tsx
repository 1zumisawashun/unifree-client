"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog, UseDialog } from "@/components/elements/Dialog";
import { Panel } from "@/components/elements/Panel";
import { InputText } from "@/components/forms";
import { editPrismaUser } from "@/features/mypage/MypageSetting/components/EditDialog/hooks/editPrismaUser";
import { User } from "@/functions/types/Prisma";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "edit-dialog";

export function EditDialog({
  dialog,
  user,
}: {
  dialog: UseDialog;
  user: User;
}) {
  const [displayName, setDisplayName] = useState(user.displayName ?? "");
  const [university, setUniversity] = useState(user.university ?? "");
  const [faculty, setFaculty] = useState(user.faculty ?? "");
  const [department, setDepartment] = useState(user.department ?? "");

  const router = useRouter();

  const submit = async () => {
    const params = {
      user,
      displayName,
      university,
      faculty,
      department,
    };
    try {
      const response = await editPrismaUser(params);
      if (!response) throw new Error();

      router.refresh();
      dialog.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プロフィール変更</p>
        <Panel.Flame hasBorder>
          <div className={styles[`${BLOCK_NAME}-form-container`]}>
            <Panel.Inner>
              <InputText
                label="氏名"
                isOptioned
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <InputText
                label="大学名"
                isOptioned
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              <InputText
                label="学部名"
                isOptioned
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
              <InputText
                label="学科名"
                isOptioned
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Panel.Inner>
          </div>
        </Panel.Flame>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            キャンセル
          </Button>
          <Button onClick={submit}>変更する</Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
