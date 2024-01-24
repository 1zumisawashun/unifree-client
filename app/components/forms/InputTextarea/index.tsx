import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import { InputWrapper } from "@/components/forms/InputWrapper";
import styles from "./styles.module.scss";

type InputTextareaProps = {} & ComponentPropsWithRef<"textarea"> &
  InputWrapperPropsPassThroughProps;

export const InputTextarea = forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(
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
