import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef
} from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'input'> & {
  children?: ReactNode
  error?: string
}

type Ref = ElementRef<'input'>

const BLOCK_NAME = 'input-toggle'

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export const InputToggle = forwardRef<Ref, Props>(
  ({ children, error, ...props }, ref) => (
    <div className={styles[`${BLOCK_NAME}-label`]}>
      {children && (
        <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
      )}
      <label className={`${styles[BLOCK_NAME]}`}>
        <input
          className={styles[`${BLOCK_NAME}-input`]}
          ref={ref}
          type="checkbox"
          hidden
          data-error={!!error}
          {...props}
        />
        <span className={styles[`${BLOCK_NAME}-visual`]} />
        <span className={styles[`${BLOCK_NAME}-outline`]} />
      </label>
    </div>
  )
)

InputToggle.displayName = 'InputToggle'

{
  /* <InputToggle
  checked={isDisplay}
  onChange={(e) => setIsDisplay(e.target.checked)}
/>; */
}
