"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import {
  UseDialog,
  useDialog,
} from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { LoadingSpinner } from "@/components/elements/LoadingSpinner";
import { logoutByFirebaseAuth } from "@/functions/helpers/firebaseAuth";
import { logoutByNextAuth } from "@/functions/helpers/nextAuth";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "logout-dialog";

export const LogoutDialog = ({ dialog }: { dialog: UseDialog }) => {
  const errorDialog = useDialog();

  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const logout = async () => {
    dialog.close();
    setIsPending(true);

    try {
      await logoutByFirebaseAuth();
      await logoutByNextAuth(); // ログインページへリダイレクトされる
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
      dialog.close();
      errorDialog.open();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Dialog {...dialog}>
        <div className={styles[`${BLOCK_NAME}-body`]}>
          <p className={styles[`${BLOCK_NAME}-text`]}>
            本当にログアウトしますか？
          </p>
          <ButtonWrapper position="center">
            <Button onClick={dialog.close} theme="danger" variant="outlined">
              キャンセル
            </Button>
            <Button onClick={logout} theme="danger">
              ログアウト
            </Button>
          </ButtonWrapper>
        </div>
      </Dialog>
      <ErrorDialog dialog={errorDialog} message={message} domain="ログアウト" />
      {isPending && <LoadingSpinner />}
    </>
  );
};
