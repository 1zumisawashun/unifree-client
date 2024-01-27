import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { icons } from "@/components/buttons/button.constant";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = Omit<ComponentProps<typeof UnstyledButton>, "children"> &
  BaseIconButtonProps;

type Ref = HTMLButtonElement;

export const IconButton = forwardRef<Ref, Props>(
  (
    {
      type = "button",
      theme = "primary",
      variant = "contained",
      name = "edit",
      size = "medium",
      shape = "round",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const Tag = icons[`${name}`];

    return (
      <UnstyledButton
        {...props}
        type={type}
        className={clsx(styles["icon-button"], className)}
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
