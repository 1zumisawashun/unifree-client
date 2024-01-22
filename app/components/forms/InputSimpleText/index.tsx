import { useId } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "input-simple-text";

export function InputSimpleText() {
  const id = useId();
  const label = "First Name";
  return (
    <div className={styles[`${BLOCK_NAME}-wrapper`]}>
      <label htmlFor={id} className={styles[`${BLOCK_NAME}-label`]}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        required
        className={styles[`${BLOCK_NAME}-input`]}
      />
    </div>
  );
}
