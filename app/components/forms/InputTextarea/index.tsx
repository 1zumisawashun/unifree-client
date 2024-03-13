import { InputWrapper } from '@/components/forms/InputWrapper'
import { InputWrapperPropsPassThroughProps } from '@/components/forms/input.type'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'textarea'> &
  InputWrapperPropsPassThroughProps

type Ref = ElementRef<'textarea'>

export const InputTextarea = forwardRef<Ref, Props>(
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
      >
        <textarea
          className={styles['input-textarea']}
          {...props}
          ref={ref}
          id={id}
          data-error={Boolean(error)}
          disabled={disabled}
        />
      </InputWrapper>
    )
  }
)

InputTextarea.displayName = 'Input'
