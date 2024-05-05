import { IconButton } from '@/components/buttons/IconButton'
import { StackPosition } from '@/functions/types/Common'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { useToastAction } from './useToast'

type ToastProps = {
  message: string
  theme: any
  position?: StackPosition
}

export const BLOCK_NAME = 'toast'

export const Toast: React.FC<ToastProps> = ({
  message,
  theme,
  position = 'topCenter'
}) => {
  const { resetTimeout, setIsShowWithTimeout, closeToast } = useToastAction()

  return (
    <div
      className={clsx(
        styles[`${BLOCK_NAME}`],
        styles[`${BLOCK_NAME}-slide--in`]
      )}
      data-position={position}
    >
      <div
        className={styles[`${BLOCK_NAME}-content`]}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
        data-theme={theme}
      >
        <span className={styles[`${BLOCK_NAME}-text`]}>{message}</span>

        <IconButton
          name="cross"
          onClick={closeToast}
          size="x-small"
          theme="success"
        />
      </div>
    </div>
  )
}
