import ButtonAnchor from "@/components/buttons/ButtonAnchor";
import { ColorType } from "@/functions/types/Common";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type TextButtonAnchorProps = { color?: ColorType } & Omit<
  ComponentProps<typeof ButtonAnchor>,
  "variant"
>;

export default function TextButtonAnchor({
  children,
  color,
  ...props
}: TextButtonAnchorProps) {
  return (
    <ButtonAnchor
      {...props}
      data-color={color}
      variant="transparent"
      className={styles["text-button"]}
    >
      {children}
    </ButtonAnchor>
  );
}
