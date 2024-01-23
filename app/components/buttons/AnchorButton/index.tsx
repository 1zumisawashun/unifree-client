import UnstyledButtonAnchor from "@/components/buttons/UnstyledButtonAnchor";
import { BaseButtonProps } from "@/components/buttons/button.type";
import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type AnchorButtonProps = {} & ComponentProps<typeof UnstyledButtonAnchor> &
  BaseButtonProps;

export default function AnchorButton({
  children,
  theme = "primary",
  variant = "contained",
  size = "medium",
  shape = "square",
  className,
  prefix,
  suffix,
  ...props
}: AnchorButtonProps) {
  return (
    <UnstyledButtonAnchor
      {...props}
      className={clsx(className, styles["button"])}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
    >
      {prefix ?? null}
      {children}
      {suffix ?? null}
    </UnstyledButtonAnchor>
  );
}
