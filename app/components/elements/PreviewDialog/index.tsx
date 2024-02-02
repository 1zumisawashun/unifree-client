"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Swiper } from "@/components/elements/Swiper";
import styles from "./styles.module.scss";

const BLOCK_NAME = "preview-dialog";

type Image = {
  id: number;
  src: string;
  name: string;
};

/* eslint-disable @next/next/no-img-element */
export const PreviewDialog = ({
  dialog,
  images,
}: {
  dialog: UseDialog;
  images?: Image[];
}) => {
  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プレビューダイアログ</p>
        {images && (
          <Swiper
            rows={images}
            render={(props) => <ImageRender {...props} />}
          />
        )}
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            Close
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};

const ImageRender = ({ src, name }: Image) => {
  return (
    <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
      <img src={src} alt={name} className={styles[`${BLOCK_NAME}-image`]} />
    </div>
  );
};
