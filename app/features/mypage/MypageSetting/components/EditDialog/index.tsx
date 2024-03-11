"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog, UseDialog } from "@/components/elements/Dialog";
import { Panel } from "@/components/elements/Panel";
import { InputText } from "@/components/forms";
import { editPrismaUser } from "@/features/mypage/MypageSetting/components/EditDialog/hooks/editPrismaUser";
import { UpsertUser, zUpsertUser } from "@/features/mypage/user.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const BLOCK_NAME = "edit-dialog";

export function EditDialog({
  dialog,
  user,
  userId,
}: {
  dialog: UseDialog;
  user: UpsertUser;
  userId: number;
}) {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpsertUser>({
    resolver: zodResolver(zUpsertUser),
    mode: "onChange",
    defaultValues: user,
  });

  const onSubmit: SubmitHandler<UpsertUser> = async (data) => {
    setIsPending(true);
    try {
      const response = await editPrismaUser({ userId, ...data });
      if (!response) throw new Error();

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      dialog.close();
      setIsPending(false);
    }
  };

  const onError: SubmitErrorHandler<UpsertUser> = (errors) => {
    console.log(errors);
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
                error={errors.displayName?.message}
                {...register("displayName")}
              />
              <InputText
                label="大学名"
                isOptioned
                error={errors.university?.message}
                {...register("university")}
              />
              <InputText
                label="学部名"
                isOptioned
                error={errors.faculty?.message}
                {...register("faculty")}
              />
              <InputText
                label="学科名"
                isOptioned
                error={errors.department?.message}
                {...register("department")}
              />
            </Panel.Inner>
          </div>
        </Panel.Flame>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            キャンセル
          </Button>
          <Button onClick={handleSubmit(onSubmit, onError)} loading={isPending}>
            変更する
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
