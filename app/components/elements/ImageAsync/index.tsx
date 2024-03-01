"use client";

import { CircularProgress } from "@/components/elements/CircularProgress";
import clsx from "clsx";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "image-async";

/**
 * 親コンポーネントからwidthとheightをclassName経由でおろす必要がある
 */
export const ImageAsync = ({
  src,
  alt,
  className,
  ...props
}: ComponentProps<typeof Image>) => {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  return (
    <div className={clsx(styles[`${BLOCK_NAME}-wrapper`], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ visibility }}
        className={clsx(styles[`${BLOCK_NAME}`], className)}
        {...props}
        onError={() => setReveal(true)}
        onLoad={() => setReveal(true)}
        sizes="100vw"
      />
      <CircularProgress
        size="large"
        theme="primary"
        variant="outlined"
        className={styles[`${BLOCK_NAME}-circular-progress`]}
        style={{ display: loader }}
      />
    </div>
  );
};
