import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type UnstyledButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "color">;

export const UnstyledButton = forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>(({ type = "button", children, ...props }, ref) => (
  <button {...props} type={type} ref={ref}>
    {children}
  </button>
));

UnstyledButton.displayName = "UnstyledButton";
