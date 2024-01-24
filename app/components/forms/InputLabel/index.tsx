import { InputLabelProps } from "@/components/forms/input.type";
import styles from "./styles.module.scss";

const BLOCK_NAME = "input-label";

export function InputLabel({
  isOptioned,
  isRequired,
  children,
}: InputLabelProps) {
  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      <p className={styles[`${BLOCK_NAME}-text`]}>{children}</p>
      {isOptioned ? (
        <span className={styles[`${BLOCK_NAME}-option`]}>任意</span>
      ) : null}
      {isRequired ? (
        <span className={styles[`${BLOCK_NAME}-require`]}>必須</span>
      ) : null}
    </div>
  );
}
