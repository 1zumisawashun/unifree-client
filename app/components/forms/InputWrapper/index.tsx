import { InputLabel } from "@/components/forms/InputLabel";
import { InputWrapperProps } from "@/components/forms/input.type";
import clsx from "clsx";
import styles from "./styles.module.scss";

const BLOCK_NAME = "input-wrapper";

export function InputWrapper({
  id,
  label,
  error,
  className,
  description,
  children,
  isOptioned = false,
  isRequired = false,
  disabled,
  width = "auto",
}: InputWrapperProps) {
  return (
    <div
      className={clsx(styles[`${BLOCK_NAME}`], className)}
      data-width={width}
    >
      <label htmlFor={id} aria-disabled={disabled}>
        <InputLabel isOptioned={isOptioned} isRequired={isRequired}>
          {label}
        </InputLabel>
      </label>

      {description && (
        <p className={styles[`${BLOCK_NAME}-description`]}>{description}</p>
      )}

      <label htmlFor={id} aria-disabled={disabled}>
        {children}
      </label>

      {error && <p className={styles[`${BLOCK_NAME}-error`]}>{error}</p>}
    </div>
  );
}
