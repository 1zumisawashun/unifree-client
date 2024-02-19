"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog, UseDialog } from "@/components/elements/Dialog";
import { deletePrismaProduct } from "@/features/product/ProductDetail/components/DeleteDialog/hooks/deletePrismaProduct";
import { editStripePrices } from "@/features/product/hooks/editStripePrices";
import { Product } from "@/functions/types/Prisma";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

const BLOCK_NAME = "delete-dialog";

export const DeleteDialog = ({
  dialog,
  product,
}: {
  dialog: UseDialog;
  product: Product;
}) => {
  const router = useRouter();

  const _delete = async () => {
    try {
      const response = await editStripePrices({ product });
      if (!response) throw new Error();

      const json = await deletePrismaProduct({ product });
      if (!json) throw new Error();

      router.push(`/products`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>本当に削除しますか？</p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            キャンセル
          </Button>
          <Button onClick={_delete} theme="danger">
            削除する
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
