"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { FormWrapper, InputText } from "@/components/forms";
import styles from "./styles.module.scss";

const BLOCK_NAME = "edit-dialog";

export function EditDialog({ dialog }: { dialog: UseDialog }) {
  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プロフィール変更</p>
        <FormWrapper>
          <InputText label="大学名" />
          <InputText label="学部名" />
          <InputText label="学科名" />
        </FormWrapper>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => alert("demo")}>Update</Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
