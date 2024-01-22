import { InputRadio } from "@/components/forms/InputRadio";
import { SelectOptions } from "@/functions/types/Common";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import {
  InputWrapper,
  InputWrapperPropsPassThroughProps,
} from "../InputWrapper";

export type InputRadioGroupProps = ComponentPropsWithRef<"input"> & {
  options: SelectOptions;
};
export type InputFieldProps = InputRadioGroupProps &
  InputWrapperPropsPassThroughProps;

export const InputRadioGroup = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      description,
      options,
      children,
      className,
      isOptioned,
      isRequired,
      disabled,
      width,
      ...props
    },
    // ref
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
        {options.map((option) => (
          <InputRadio {...props} key={option.value}>
            {option.label}
          </InputRadio>
        ))}
      </InputWrapper>
    );
  }
);

InputRadioGroup.displayName = "Input";
