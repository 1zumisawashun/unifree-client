import UnstyledButton from "@/components/buttons/UnstyledButton";
import { BaseButtonProps } from "@/components/buttons/button.type";
import { CircularProgress } from "@/components/elements/CircularProgress";
import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {} & ComponentProps<typeof UnstyledButton> & BaseButtonProps;

export default function Button({
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
}: ButtonProps) {
  return (
    <UnstyledButton
      {...props}
      type={type}
      className={clsx(className, styles["button"])}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
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
