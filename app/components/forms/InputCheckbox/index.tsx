import { CheckIcon } from "@/components/elements/SvgIcon";
import { VariantType } from "@/functions/types/Common";
import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "./styles.module.scss";

export type CheckboxProps = ComponentPropsWithRef<"input"> & {
  children?: React.ReactNode;
  error?: string;
  variant?: Extract<VariantType, "card">;
};
export type InputFieldProps = CheckboxProps;

const BLOCK_NAME = "input-checkbox";

export const InputCheckbox = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ children, error, variant, ...props }, ref) => {
    return (
      <label className={styles[`${BLOCK_NAME}-label`]} data-variant={variant}>
        <input
          className={styles[`${BLOCK_NAME}-input`]}
          ref={ref}
          type="checkbox"
          hidden
          data-error={Boolean(error)}
          {...props}
        />
        <span className={styles[`${BLOCK_NAME}-icon`]}>
          <CheckIcon aria-hidden="true" />
        </span>
        {children && (
          <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
        )}
      </label>
    );
  }
);

InputCheckbox.displayName = "InputCheckbox";
