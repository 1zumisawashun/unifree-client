import { ThemeType } from '@/functions/types/Common'
import clsx from 'clsx'
import styles from './styles.module.scss'

type PanelProps = {
  children: React.ReactNode
  theme?: ThemeType
  scrollable?: boolean
  className?: string
}

export function Panel({
  children,
  theme = 'transparent',
  scrollable = false,
  className
}: PanelProps) {
  return (
    <div
      className={clsx(className, styles['panel-wrapper'])}
      data-scroll={scrollable}
    >
      <div className={styles['panel-inner']} data-theme={theme}>
        {children}
      </div>
    </div>
  )
}
