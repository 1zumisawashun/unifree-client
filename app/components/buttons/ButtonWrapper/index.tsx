import { DirectionType, PositionType } from '@/functions/types/Common'
import clsx from 'clsx'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  position?: PositionType
  direction?: DirectionType
  className?: string
}

const BLOCK_NAME = 'button-wrapper'

export const ButtonWrapper: React.FC<Props> = ({
  children,
  position = 'start',
  direction = 'row',
  className
}) => {
  return (
    <div
      className={clsx(styles[`${BLOCK_NAME}`], className)}
      data-position={position}
      data-direction={direction}
    >
      {children}
    </div>
  )
}
