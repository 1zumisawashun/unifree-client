import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { BaseButtonProps } from "@/components/buttons/button.type";
import clsx from "clsx";
import { ComponentProps, ElementRef, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = ComponentProps<typeof UnstyledButtonAnchor> & BaseButtonProps;

type Ref = ElementRef<"a">;

export const ButtonAnchor = forwardRef<Ref, Props>(
  (
    {
      children,
      theme = "primary",
      variant = "contained",
      size = "medium",
      shape,
      className,
      prefix,
      suffix,
      ...props
    },
    ref
  ) => {
    return (
      <UnstyledButtonAnchor
        {...props}
        className={clsx(styles["button"], className)}
        data-variant={variant}
        data-theme={theme}
        data-size={size}
        data-shape={shape}
        ref={ref}
      >
        {prefix ?? null}
        {children}
        {suffix ?? null}
      </UnstyledButtonAnchor>
    );
  }
);

ButtonAnchor.displayName = "ButtonAnchor";
