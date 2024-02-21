import { UnstyledButtonAnchor } from "@/components/buttons/UnstyledButtonAnchor";
import { icons } from "@/components/buttons/button.constant";
import { BaseIconButtonProps } from "@/components/buttons/button.type";
import clsx from "clsx";
import { ComponentProps, ElementRef, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = Omit<ComponentProps<typeof UnstyledButtonAnchor>, "children"> &
  BaseIconButtonProps;

type Ref = ElementRef<"a">;

export const IconButtonAnchor = forwardRef<Ref, Props>(
  (
    {
      theme = "primary",
      variant = "contained",
      name = "add",
      size = "medium",
      shape = "round",
      className,
      ...props
    },
    ref
  ) => {
    const Tag = icons[`${name}`];

    return (
      <UnstyledButtonAnchor
        {...props}
        className={clsx(styles["icon-button"], className)}
        data-variant={variant}
        data-theme={theme}
        data-size={size}
        data-shape={shape}
        ref={ref}
      >
        <Tag />
      </UnstyledButtonAnchor>
    );
  }
);

IconButtonAnchor.displayName = "IconButtonAnchor";
