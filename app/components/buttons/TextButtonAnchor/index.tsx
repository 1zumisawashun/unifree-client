import AnchorButton from "@/components/buttons/AnchorButton";
import { ColorType } from "@/functions/types/Common";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type TextButtonAnchorProps = { color?: ColorType } & Omit<
  ComponentProps<typeof AnchorButton>,
  "variant"
>;

export default function TextButtonAnchor({
  children,
  color,
  ...props
}: TextButtonAnchorProps) {
  return (
    <AnchorButton
      {...props}
      data-color={color}
      variant="transparent"
      className={styles["text-button"]}
    >
      {children}
    </AnchorButton>
  );
}
