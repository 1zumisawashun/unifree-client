import React, { forwardRef, ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'

export type ToggleProps = ComponentPropsWithRef<'input'> & {
  children?: React.ReactNode
  error?: string
}

export type InputFieldProps = ToggleProps

const BLOCK_NAME = 'input-toggle'

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export const InputToggle = forwardRef<HTMLInputElement, InputFieldProps>(
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
