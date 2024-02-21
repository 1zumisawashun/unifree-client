"use client";

import { WidthType } from "@/functions/types/Common";
import { ElementRef, forwardRef } from "react";
import styles from "./styles.module.scss";

type DialogProps = {
  close?: () => void;
  children: React.ReactNode;
  width?: WidthType;
  hasSwiper?: boolean;
};

type Ref = ElementRef<"dialog">;

export const Dialog: React.FC<DialogProps> = forwardRef<Ref, DialogProps>(
  ({ children, width, hasSwiper = false }, ref) => {
    return (
      <dialog
        ref={ref}
        // onClick={close}
        className={styles["dialog"]}
        data-width={width}
        data-swiper={hasSwiper}
      >
        {children}
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";
