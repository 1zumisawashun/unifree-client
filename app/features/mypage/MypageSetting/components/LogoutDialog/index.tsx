"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { logout } from "@/functions/helpers/firebaseAuth";
import styles from "./styles.module.scss";

const BLOCK_NAME = "logout-dialog";

export const LogoutDialog = ({ dialog }: { dialog: UseDialog }) => {
  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>
          本当にログアウトしますか？
        </p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            Cancel
          </Button>
          <Button onClick={logout} theme="danger">
            Logout
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
