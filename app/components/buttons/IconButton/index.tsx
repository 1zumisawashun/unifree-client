import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type IconButtonProps = {} & Omit<
  ComponentProps<typeof UnstyledButton>,
  "children"
> &
  BaseIconButtonProps;

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
      className={clsx(styles["icon-button"])}
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
