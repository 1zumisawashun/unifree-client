import { CheckIcon } from '@/components/elements/SvgIcon'
import { SizeType, VariantType } from '@/functions/types/Common'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef
} from 'react'
import styles from './styles.module.scss'

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  children?: ReactNode
  error?: string
  variant?: Extract<VariantType, 'card'>
  size?: SizeType
}

type Ref = ElementRef<'input'>

const BLOCK_NAME = 'input-radio'

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export const InputRadio = forwardRef<Ref, Props>(
  ({ children, error, variant, size, ...props }, ref) => (
    <label
      className={styles[`${BLOCK_NAME}-label`]}
      data-variant={variant}
      data-size={size}
    >
      <input
        className={styles[`${BLOCK_NAME}-input`]}
        ref={ref}
        name="input-radio" // 同じname属性を持つinput要素は同じグループになるため必要
        type="radio"
        hidden
        data-error={!!error}
        {...props}
      />
      <span className={styles[`${BLOCK_NAME}-icon`]}>
        <CheckIcon aria-hidden="true" />
      </span>
      {children && (
        <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
      )}
    </label>
  )
)

InputRadio.displayName = 'InputRadio'

// ex) multiple input radio

// {statusOptions.map((option) => (
//   <InputRadio
//     key={option.value}
//     checked={status === option.value}
//     onChange={() => setStatus(option.value)}
//   >
//     {option.label}
//   </InputRadio>
// ))}
