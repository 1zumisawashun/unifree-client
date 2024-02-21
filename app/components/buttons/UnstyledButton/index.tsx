import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
};

type Ref = ElementRef<"button">;

export const UnstyledButton = forwardRef<Ref, Props>(
  ({ type = "button", children, ...props }, ref) => (
    <button {...props} type={type} ref={ref} style={{ cursor: "pointer" }}>
      {children}
    </button>
  )
);

UnstyledButton.displayName = "UnstyledButton";
