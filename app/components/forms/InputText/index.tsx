import { InputWrapper } from "@/components/forms/InputWrapper";
import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import styles from "./styles.module.scss";

type Props = ComponentPropsWithoutRef<"input"> &
  InputWrapperPropsPassThroughProps;

type Ref = ElementRef<"input">;

export const InputText = forwardRef<Ref, Props>(
  (
    {
      label,
      error,
      description,
      className,
      isOptioned,
      isRequired,
      disabled,
      width,
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
        width={width}
      >
        <input
          className={styles["input-text"]}
          {...props}
          ref={ref}
          id={id}
          data-error={!!error}
          disabled={disabled}
        />
      </InputWrapper>
    );
  }
);

InputText.displayName = "InputText";
