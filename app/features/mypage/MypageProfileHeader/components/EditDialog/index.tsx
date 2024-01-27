"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import styles from "./styles.module.scss";

const BLOCK_NAME = "mypage";

export function EditDialog({ dialog }: { dialog: UseDialog }) {
  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-modal-body`]}>
        <p className={styles[`${BLOCK_NAME}-modal-text`]}>
          本当に削除しますか？
        </p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => alert("demo")} theme="danger">
            Delete
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
