import { ComponentPropsWithoutRef, ReactNode } from "react";

export type UnstyledButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "color">;

export default function UnstyledButton({
  type = "button",
  children,
  ...props
}: UnstyledButtonProps) {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
}
