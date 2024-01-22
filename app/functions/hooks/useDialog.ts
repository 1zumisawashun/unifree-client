"use client";

import { Ref, useCallback, useRef } from "react";

export type UseDialog = {
  ref: Ref<HTMLDialogElement>;
  open: () => void;
  close: () => void;
};

export const useDialog = (): UseDialog => {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    if (ref.current) {
      document.body.style.overflow = "hidden";
      ref.current.showModal();
    }
  }, []);

  const close = useCallback(() => {
    if (ref.current) {
      document.body.style.overflow = "auto";
      ref.current.close();
    }
  }, []);

  return { ref, open, close };
};
