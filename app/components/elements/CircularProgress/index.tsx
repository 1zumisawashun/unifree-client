import { SizeType, ThemeType, VariantType } from '@/functions/types/Common'
import clsx from 'clsx'
import { CSSProperties, ElementRef, forwardRef } from 'react'
import styles from './styles.module.scss'

type Props = {
  size: SizeType
  theme: ThemeType
  variant: VariantType
  className?: string // additional class
  style?: CSSProperties // inline style
}

type Ref = ElementRef<'span'>

const BLOCK_NAME = 'circular-progress'

export const CircularProgress = forwardRef<Ref, Props>(
  ({ size, theme, variant, className, ...props }, ref) => {
    return (
      <span
        className={clsx(styles[`${BLOCK_NAME}`], className)}
        data-variant={variant}
        data-theme={theme}
        data-size={size}
        ref={ref}
        {...props}
      />
    )
  }
)

CircularProgress.displayName = 'CircularProgress'
