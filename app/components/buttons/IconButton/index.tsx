import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";
import UnstyledButton, { UnstyledButtonProps } from "../UnstyledButton";
import styles from "./styles.module.scss";

type BaseProps = {
  name?: "add" | "edit" | "cross";
  size?: SizeType;
  shape?: ShapeType;
  variant?: VariantType;
  theme?: ThemeType;
  disabled?: boolean;
};

export type IconButtonProps = {} & Omit<UnstyledButtonProps, "children"> &
  BaseProps;

const Icons = {
  add: AddIcon,
  edit: EditIcon,
  cross: CrossIcon,
};

export default function IconButton({
  type = "button",
  theme = "primary",
  variant = "contained",
  name = "edit",
  size = "medium",
  shape = "round",
  disabled,
  ...props
}: IconButtonProps) {
  const Tag = Icons[`${name}`];

  return (
    <UnstyledButton
      {...props}
      type={type}
      className={styles["icon-button"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
    >
      <Tag />
    </UnstyledButton>
  );
}
