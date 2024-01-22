import React, { forwardRef } from "react";
import styles from "./styles.module.scss";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  id: string;
}

const BLOCK_NAME = "spui-ToggleSwitch";

export const InputToggle = forwardRef<HTMLInputElement, Props>(
  function InputToggle({ id = "", ...rest }: Props, ref) {
    return (
      <label className={styles[BLOCK_NAME]}>
        <input
          className={styles[`${BLOCK_NAME}-input`]}
          id={id}
          ref={ref}
          type="checkbox"
          {...rest}
        />
        <span className={styles[`${BLOCK_NAME}-visual`]}></span>
        <span className={styles[`${BLOCK_NAME}-outline`]}></span>
      </label>
    );
  }
);
