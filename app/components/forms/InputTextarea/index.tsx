import { ComponentPropsWithRef, forwardRef, useId } from "react";
import {
  InputWrapper,
  InputWrapperPropsPassThroughProps,
} from "../InputWrapper";
import styles from "./styles.module.scss";

export type InputProps = ComponentPropsWithRef<"textarea">;
export type InputFieldProps = InputProps & InputWrapperPropsPassThroughProps;
export const InputTextarea = forwardRef<HTMLTextAreaElement, InputFieldProps>(
  (
    {
      label,
      error,
      description,
      className,
      isOptioned,
      isRequired,
      disabled,
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <InputWrapper
        label={label}
        error={error}
        description={description}
        id={id}
        isOptioned={isOptioned}
        isRequired={isRequired}
        disabled={disabled}
      >
        <textarea
          className={styles["input-textarea"]}
          {...props}
          ref={ref}
          id={id}
          data-error={Boolean(error)}
          disabled={disabled}
        />
      </InputWrapper>
    );
  }
);

InputTextarea.displayName = "Input";
