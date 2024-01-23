"use client";

import { WidthType } from "@/functions/types/Common";
import { Ref, forwardRef } from "react";
import styles from "./styles.module.scss";

type DialogProps = {
  ref: Ref<HTMLDialogElement>;
  close?: () => void;
  children: React.ReactNode;
  width?: WidthType;
};

export const Dialog: React.FC<DialogProps> = forwardRef<
  HTMLDialogElement,
  DialogProps
>(({ close, children, width }, ref) => {
  return (
    <dialog
      ref={ref}
      onClick={close}
      className={styles["dialog"]}
      data-width={width}
    >
      {children}
    </dialog>
  );
});

Dialog.displayName = "Dialog";
