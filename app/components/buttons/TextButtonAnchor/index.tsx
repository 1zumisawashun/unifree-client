import { ColorType } from "@/functions/types/Common";
import AnchorButton, { AnchorButtonProps } from "../AnchorButton";
import styles from "./styles.module.scss";

type BaseType = {
  color?: ColorType;
};

export type TextButtonAnchorProps = {} & Omit<AnchorButtonProps, "variant"> &
  BaseType;

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
