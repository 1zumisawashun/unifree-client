"use client";

import { ToastContext } from "@/functions/contexts";
import { useContext } from "react";

export const useToast = () => {
  return useContext(ToastContext);
};
