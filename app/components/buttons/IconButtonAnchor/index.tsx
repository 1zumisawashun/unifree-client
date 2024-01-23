import UnstyledButtonAnchor from "@/components/buttons/UnstyledButtonAnchor";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type IconButtonAnchorProps = {} & Omit<
  ComponentProps<typeof UnstyledButtonAnchor>,
  "children"
> &
  BaseIconButtonProps;

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
