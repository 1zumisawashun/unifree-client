import Button from "@/components/buttons/Button";
import { ColorType } from "@/functions/types/Common";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

type TextButtonProps = { color?: ColorType } & Omit<
  ComponentProps<typeof Button>,
  "variant"
>;

export default function TextButton({
  children,
  color,
  ...props
}: TextButtonProps) {
  return (
    <Button
      {...props}
      data-color={color}
      variant="transparent"
      className={styles["text-button"]}
    >
      {children}
    </Button>
  );
}
