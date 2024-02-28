import { InputFlexWrapper, InputWrapper } from "@/components/forms";
import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { DirectionType } from "@/functions/types/Common";

type Props<T> = {
  rows: T[];
  render: React.FC<T>;
  direction?: DirectionType;
} & InputWrapperPropsPassThroughProps;

export const InputMultiple = <T extends {}>({
  label,
  error,
  description,
  isOptioned,
  isRequired,
  disabled,
  width,
  ...props
}: Props<T>) => {
  return (
    <InputWrapper
      label={label}
      error={error}
      description={description}
      id=""
      isOptioned={isOptioned}
      isRequired={isRequired}
      disabled={disabled}
      width={width}
    >
      <InputFlexWrapper direction={props.direction} error={error}>
        {props.rows.map((row, index) => (
          <props.render {...row} key={index} />
        ))}
      </InputFlexWrapper>
    </InputWrapper>
  );
};
