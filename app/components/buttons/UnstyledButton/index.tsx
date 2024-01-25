import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
};

type Ref = HTMLButtonElement;

export const UnstyledButton = forwardRef<Ref, Props>(
  ({ type = "button", children, ...props }, ref) => (
    <button {...props} type={type} ref={ref}>
      {children}
    </button>
  )
);

UnstyledButton.displayName = "UnstyledButton";
