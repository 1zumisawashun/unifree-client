"use client";
import { WidthType } from "@/functions/types/Common";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

type DialogParallelProps = {
  children: React.ReactNode;
  open: boolean;
  width?: WidthType;
};

export const DialogParallel: React.FC<DialogParallelProps> = ({
  children,
  open,
  width,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
  }, [open]);

  const closeDialog = () => {
    router.back();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={closeDialog}
      className={styles["dialog"]}
      data-width={width}
    >
      {children}
    </dialog>
  );
};
