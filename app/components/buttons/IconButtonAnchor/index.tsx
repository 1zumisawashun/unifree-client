import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";
import UnstyledButtonAnchor, {
  UnstyledButtonAnchorProps,
} from "../UnstyledButtonAnchor";
import styles from "./styles.module.scss";

type BaseProps = {
  name?: "add" | "edit" | "cross";
  size?: SizeType;
  shape?: ShapeType;
  variant?: VariantType;
  theme?: ThemeType;
  disabled?: boolean;
};

export type IconButtonAnchorProps = {} & Omit<
  UnstyledButtonAnchorProps,
  "children"
> &
  BaseProps;

const Icons = {
  add: AddIcon,
  edit: EditIcon,
  cross: CrossIcon,
};

export default function IconButtonAnchor({
  theme = "primary",
  variant = "contained",
  name = "add",
  size = "medium",
  shape = "round",
  disabled,
  ...props
}: IconButtonAnchorProps) {
  const Tag = Icons[`${name}`];

  return (
    <UnstyledButtonAnchor
      {...props}
      className={styles["icon-button"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
    >
      <Tag />
    </UnstyledButtonAnchor>
  );
}
