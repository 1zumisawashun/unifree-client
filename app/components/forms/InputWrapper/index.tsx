import { WidthType } from '@/functions/types/Common'
import clsx from 'clsx'
import { InputLabel } from '@/components/forms/InputLabel'
import styles from './styles.module.scss'

type InputWrapperProps = {
  id: string
  label?: string
  error?: string
  description?: string
  className?: string
  children: React.ReactNode
  isOptioned?: boolean
  isRequired?: boolean
  disabled?: boolean
  width?: WidthType
}

export type InputWrapperPropsPassThroughProps = Omit<
  InputWrapperProps,
  'children' | 'className' | 'id'
>

const BLOCK_NAME = 'input-wrapper'

export function InputWrapper({
  id,
  label,
  error,
  className,
  description,
  children,
  isOptioned = false,
  isRequired = false,
  disabled,
  width = 'auto'
}: InputWrapperProps) {
  return (
    <div
      className={clsx(styles[`${BLOCK_NAME}`], className)}
      data-width={width}
    >
      <label htmlFor={id} aria-disabled={disabled}>
        <InputLabel isOptioned={isOptioned} isRequired={isRequired}>
          {label}
        </InputLabel>
      </label>

      {description && (
        <p className={styles[`${BLOCK_NAME}-description`]}>{description}</p>
      )}

      <label htmlFor={id} aria-disabled={disabled}>
        {children}
      </label>

      {error && <p className={styles[`${BLOCK_NAME}-error`]}>{error}</p>}
    </div>
  )
}
