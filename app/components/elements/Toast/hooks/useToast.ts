"use client";

import { ToastContext } from "@/components/elements/ToastProvider";
import { useContext } from "react";

export const useToast = () => {
  return useContext(ToastContext);
};

// const { showToast, closeToast } = useToast();

//   useEffect(() => {
//     return () => closeToast();
//   }, [closeToast]);
