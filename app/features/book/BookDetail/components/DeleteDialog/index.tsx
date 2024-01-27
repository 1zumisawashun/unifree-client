"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Book } from "@/functions/constants/books";
import styles from "./styles.module.scss";

const BLOCK_NAME = "delete-dialog";

/* eslint-disable @next/next/no-img-element */
export const DeleteDialog = ({
  dialog,
  book,
}: {
  dialog: UseDialog;
  book: Book;
}) => {
  const { id } = book;

  const _delete = async () => {
    const response = await fetch("/api/stripe/prices/delete", {
      method: "POST",
      body: JSON.stringify([id]),
    });
    const json = await response.json();
    // change db active props to false
    console.log(json);
  };

  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>本当に削除しますか？</p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            Cancel
          </Button>
          <Button onClick={_delete} theme="danger">
            Delete
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
