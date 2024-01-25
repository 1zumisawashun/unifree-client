import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = Omit<ComponentProps<typeof UnstyledButton>, "children"> &
  BaseIconButtonProps;

type Ref = HTMLButtonElement;

const Icons = {
  add: AddIcon,
  edit: EditIcon,
  cross: CrossIcon,
};

export const IconButton = forwardRef<Ref, Props>(
  (
    {
      type = "button",
      theme = "primary",
      variant = "contained",
      name = "edit",
      size = "medium",
      shape = "round",
      disabled,
      ...props
    },
    ref
  ) => {
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
        ref={ref}
      >
        <Tag />
      </UnstyledButton>
    );
  }
);

IconButton.displayName = "IconButton";
