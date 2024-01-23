import { ComponentPropsWithRef, forwardRef, useId } from 'react'
import {
  InputWrapper,
  InputWrapperPropsPassThroughProps
} from '@/components/forms/InputWrapper'
import styles from './styles.module.scss'

export type InputProps = ComponentPropsWithRef<'input'>
export type InputFieldProps = InputProps & InputWrapperPropsPassThroughProps
export const InputText = forwardRef<HTMLInputElement, InputFieldProps>(
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
    const id = useId()
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
          className={styles['input-text']}
          {...props}
          ref={ref}
          id={id}
          data-error={!!error}
          disabled={disabled}
        />
      </InputWrapper>
    )
  }
)

InputText.displayName = 'InputText'
