import { Nl2br } from "@/components/elements/Nl2br";
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
      <label
        htmlFor={id}
        aria-disabled={disabled}
        className={styles[`${BLOCK_NAME}-label`]}
      >
        {label && (
          <InputLabel isOptioned={isOptioned} isRequired={isRequired}>
            {label}
          </InputLabel>
        )}
      </label>

      <p className={styles[`${BLOCK_NAME}-description`]}>
        {description && <Nl2br>{description}</Nl2br>}
      </p>

      <label
        htmlFor={id}
        aria-disabled={disabled}
        className={styles[`${BLOCK_NAME}-label`]}
      >
        {children}
      </label>

      <p className={styles[`${BLOCK_NAME}-error`]}>{error}</p>
    </div>
  );
}
