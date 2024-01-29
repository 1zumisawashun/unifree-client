"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { getDataUrl } from "@/components/forms/InputFile/hooks/getDataUrl";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "preview-dialog";

/* eslint-disable @next/next/no-img-element */
export const PreviewDialog = ({
  dialog,
  file,
}: {
  dialog: UseDialog;
  file: File;
}) => {
  const [image, setImage] = useState<string>("");

  const init = async ({ file }: { file: File }) => {
    const src = (await getDataUrl({ file })) as string;
    setImage(src);
  };

  useEffect(() => {
    init({ file });
  }, [file]);

  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プレビューダイアログ</p>
        <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
          <img
            key={image}
            src={image ?? undefined}
            alt={image}
            className={styles[`${BLOCK_NAME}-image`]}
          />
        </div>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            Close
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
