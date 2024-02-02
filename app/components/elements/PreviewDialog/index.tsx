"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Swiper } from "@/components/elements/Swiper";
import { getDataUrl } from "@/components/forms/InputFile/hooks/getDataUrl";
import { isString } from "@/functions/helpers/typeGuard";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "preview-dialog";

type Image = {
  id: number;
  src: string;
  alt: string;
};

/* eslint-disable @next/next/no-img-element */
export const PreviewDialog = ({
  dialog,
  file,
}: {
  dialog: UseDialog;
  file: File | string;
}) => {
  const [image, setImage] = useState<Image>();

  const init = async ({ file }: { file: File | string }) => {
    if (isString(file)) {
      setImage({ id: 1, src: file, alt: "" });
      return;
    }
    const src = (await getDataUrl({ file })) as string;
    setImage({ id: 1, src, alt: file.name });
  };

  useEffect(() => {
    init({ file });
  }, [file]);

  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プレビューダイアログ</p>
        <Swiper
          rows={[image!]}
          render={({ id, src, alt }) => (
            <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
              <img
                key={id}
                src={src}
                alt={alt}
                className={styles[`${BLOCK_NAME}-image`]}
              />
            </div>
          )}
        />
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            Close
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};
