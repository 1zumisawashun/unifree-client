import { ColorType } from "@/functions/types/Common";
import Button, { ButtonProps } from "../Button";
import styles from "./styles.module.scss";

type BaseType = {
  color?: ColorType;
};

export type TextButtonProps = {} & Omit<ButtonProps, "variant"> & BaseType;

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
