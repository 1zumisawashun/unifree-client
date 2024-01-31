"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { API } from "@/functions/constants/api";
import { Product } from "@/functions/constants/products";
import styles from "./styles.module.scss";

const BLOCK_NAME = "delete-dialog";

const url = API.deleteStripePrices;

/* eslint-disable @next/next/no-img-element */
export const DeleteDialog = ({
  dialog,
  product,
}: {
  dialog: UseDialog;
  product: Product;
}) => {
  const { id } = product;

  const _delete = async () => {
    const response = await fetch(url, {
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
