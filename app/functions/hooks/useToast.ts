"use client";

import { ToastContext } from "@/components/elements/ToastProvider";
import { useContext } from "react";

export const useToast = () => {
  return useContext(ToastContext);
};
