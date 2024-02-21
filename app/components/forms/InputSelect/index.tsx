import { InputWrapper } from "@/components/forms/InputWrapper";
import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { SelectOptions } from "@/functions/types/Common";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import styles from "./styles.module.scss";

type Props = ComponentPropsWithoutRef<"select"> & {
  options: SelectOptions;
} & InputWrapperPropsPassThroughProps;

type Ref = ElementRef<"select">;

export const InputSelect = forwardRef<Ref, Props>(
  (
    {
      label,
      error,
      description,
      options,
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
      >
        <div className={styles["input-select-wrapper"]}>
          <select
            className={styles["input-select"]}
            {...props}
            ref={ref}
            id={id}
            data-error={Boolean(error)}
            disabled={disabled}
          >
            <option selected>未選択</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </InputWrapper>
    );
  }
);

InputSelect.displayName = "Select";
