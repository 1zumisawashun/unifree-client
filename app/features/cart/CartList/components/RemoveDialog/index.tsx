"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import styles from "./styles.module.scss";

const BLOCK_NAME = "cart-item";

export const RemoveDialog = ({ dialog }: { dialog: UseDialog }) => {
  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-modal-body`]}>
        <p className={styles[`${BLOCK_NAME}-modal-text`]}>
          カートから取り除きますか？
        </p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => alert("remove demo")} theme="danger">
            Remove
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
