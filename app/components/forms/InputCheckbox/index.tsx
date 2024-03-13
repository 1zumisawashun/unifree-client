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

const BLOCK_NAME = 'input-checkbox'

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export const InputCheckbox = forwardRef<Ref, Props>(
  ({ children, error, variant, size, ...props }, ref) => (
    <label
      className={styles[`${BLOCK_NAME}-label`]}
      data-variant={variant}
      data-size={size}
    >
      <input
        className={styles[`${BLOCK_NAME}-input`]}
        ref={ref}
        type="checkbox"
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

InputCheckbox.displayName = 'InputCheckbox'

// ex) multiple input checkbox

// {categoryOptions.map((option) => (
//   <InputCheckbox
//     key={option.value}
//     checked={categories.includes(option.value)}
//     onChange={(e) => {
//       e.target.checked
//         ? setCategories.add(option.value)
//         : setCategories.remove(option.value);
//     }}
//   >
//     {option.label}
//   </InputCheckbox>
// ))}
