"use client";

import { IconButton, UnstyledButton } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { Nl2br } from "@/components/elements/Nl2br";
import { PreviewDialog } from "@/components/elements/PreviewDialog";
import { Tooltip } from "@/components/elements/Tooltip";
import { Image } from "@/functions/types/Prisma";
import { useRef } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "product-image";

/* eslint-disable @next/next/no-img-element */
export const ProductImage = ({ images }: { images: Image[] }) => {
  const previewDialog = useDialog();
  const referenceRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <UnstyledButton
        onClick={previewDialog.open}
        className={styles[`${BLOCK_NAME}-button`]}
      >
        <img className={styles[`${BLOCK_NAME}`]} src={images[0]?.src} alt="" />

        <IconButton
          name="detail"
          className={styles[`${BLOCK_NAME}-icon-button`]}
          ref={referenceRef}
          onClick={(e) => e.stopPropagation()}
        />
        <Tooltip referenceRef={referenceRef} placement="bottom">
          <Nl2br>
            {`画像を押下するとダイアログで
          ${images.length}枚の画像を閲覧できます`}
          </Nl2br>
        </Tooltip>
      </UnstyledButton>
      <PreviewDialog dialog={previewDialog} images={images} />
    </>
  );
};
