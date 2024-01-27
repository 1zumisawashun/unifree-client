"use client";

import { WidthType } from "@/functions/types/Common";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

type DialogProps = {
  close?: () => void;
  children: React.ReactNode;
  width?: WidthType;
};

type Ref = HTMLDialogElement;

export const Dialog: React.FC<DialogProps> = forwardRef<Ref, DialogProps>(
  ({ close, children, width }, ref) => {
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
  }
);

Dialog.displayName = "Dialog";
