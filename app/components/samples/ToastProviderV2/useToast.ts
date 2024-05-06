import { useContext } from "react";
import { ToastActionContext, ToastStateContext } from "./toastContext";

export function useToastAction() {
  return useContext(ToastActionContext);
}

export function useToastState() {
  return useContext(ToastStateContext);
}
