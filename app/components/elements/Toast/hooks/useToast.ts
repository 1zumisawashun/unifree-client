"use client";

import { ToastContext } from "@/components/elements/ToastProvider";
import { useContext } from "react";

export const useToast = () => {
  return useContext(ToastContext);
};

// MEMO:遷移時にToastを閉じる
// const { showToast, closeToast } = useToast();

//   useEffect(() => {
//     return () => closeToast();
//   }, [closeToast]);
