import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { BaseButtonProps } from "@/components/buttons/button.type";
import { CircularProgress } from "@/components/elements/CircularProgress";
import clsx from "clsx";
import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {} & ComponentPropsWithoutRef<"button"> &
  ComponentProps<typeof UnstyledButton> &
  BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      children,
      theme = "primary",
      variant = "contained",
      size = "medium",
      shape = "square",
      loading,
      disabled,
      className,
      prefix,
      suffix,
      ...props
    },
    ref
  ) => {
    return (
      <UnstyledButton
        {...props}
        type={type}
        className={clsx(styles["button"], className)}
        data-variant={variant}
        data-theme={theme}
        data-size={size}
        data-shape={shape}
        aria-disabled={disabled}
        ref={ref}
      >
        {loading ? (
          <CircularProgress {...{ size, theme, variant }} />
        ) : (
          <>
            {prefix ?? null}
            {children}
            {suffix ?? null}
          </>
        )}
      </UnstyledButton>
    );
  }
);

Button.displayName = "Button";
