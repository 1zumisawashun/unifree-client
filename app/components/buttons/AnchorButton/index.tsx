import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";
import clsx from "clsx";
import UnstyledButtonAnchor, {
  UnstyledButtonAnchorProps,
} from "../UnstyledButtonAnchor";
import styles from "./styles.module.scss";

type BaseProps = {
  size?: SizeType;
  variant?: VariantType;
  theme?: ThemeType;
  loading?: boolean;
  shape?: ShapeType;
  prefix?: any;
  suffix?: any;
};

export type AnchorButtonProps = {} & UnstyledButtonAnchorProps & BaseProps;

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
