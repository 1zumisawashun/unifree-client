import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import { AddIcon, CrossIcon, EditIcon } from "@/components/elements/SvgIcon";
import { ComponentProps, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = Omit<ComponentProps<typeof UnstyledButtonAnchor>, "children"> &
  BaseIconButtonProps;

type Ref = HTMLAnchorElement;

const Icons = {
  add: AddIcon,
  edit: EditIcon,
  cross: CrossIcon,
};

export const IconButtonAnchor = forwardRef<Ref, Props>(
  (
    {
      theme = "primary",
      variant = "contained",
      name = "add",
      size = "medium",
      shape = "round",
      disabled,
      ...props
    },
    ref
  ) => {
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
        ref={ref}
      >
        <Tag />
      </UnstyledButtonAnchor>
    );
  }
);

IconButtonAnchor.displayName = "IconButtonAnchor";
