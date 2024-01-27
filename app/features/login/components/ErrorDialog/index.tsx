"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import styles from "./styles.module.scss";

const BLOCK_NAME = "error-dialog";

export function ErrorDialog({
  dialog,
  message,
}: {
  dialog: UseDialog;
  message: string;
}) {
  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-inner`]}>
        <p className={styles[`${BLOCK_NAME}-title`]}>
          新規登録もしくはログインに失敗しました。
        </p>
        <p>
          申し訳ございません。
          <br />
          以下のエラーが発生し、認証に失敗しました。
        </p>
        <p>{message}</p>
        <p>お手数ですが、入力内容を再度ご確認の上、もう一度お試しください。</p>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close}>閉じる</Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
