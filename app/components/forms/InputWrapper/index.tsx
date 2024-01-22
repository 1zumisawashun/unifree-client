import { WidthType } from "@/functions/types/Common";
import { FC, ReactNode } from "react";
import { InputLabel } from "../InputLabel";
import styles from "./styles.module.scss";

type InputWrapperProps = {
  id: string;
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  children: ReactNode;
  isOptioned?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
  width?: WidthType;
};

export type InputWrapperPropsPassThroughProps = Omit<
  InputWrapperProps,
  "children" | "className" | "id"
>;
export const InputWrapper: FC<InputWrapperProps> = ({
  id,
  label,
  error,
  // className,
  description,
  children,
  isOptioned = false,
  isRequired = false,
  disabled,
  width = "auto",
}) => {
  return (
    <div className={styles["input-wrapper"]} data-width={width}>
      <label
        className={styles["input-wrapper-label"]}
        htmlFor={id}
        aria-disabled={disabled}
      >
        <InputLabel isOptioned={isOptioned} isRequired={isRequired}>
          {label}
        </InputLabel>
      </label>
      {description && (
        <p className={styles["input-wrapper-description"]}>{description}</p>
      )}
      <label
        className={styles["input-wrapper-label"]}
        htmlFor={id}
        aria-disabled={disabled}
      >
        {children}
      </label>
      {error && <p className={styles["input-wrapper-error"]}>{error}</p>}
    </div>
  );
};
