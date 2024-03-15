import { UnstyledButton } from '@/components/buttons/UnstyledButton'
import { SendIcon } from '@/components/elements/SvgIcon'
import { useAutoResize } from '@/features/match/MatchDetail/components/MatchTextarea/hooks/useAutoResize'
import { BaseSyntheticEvent } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'match-textarea'

export function MatchTextarea({
  value,
  onChange,
  submit
}: {
  value: string
  onChange: (e: BaseSyntheticEvent) => void
  submit: () => void
}) {
  const textAreaRef = useAutoResize(value)

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        <textarea
          className={styles[`${BLOCK_NAME}-textarea`]}
          value={value}
          onChange={onChange}
          ref={textAreaRef}
          rows={1}
        />
        <UnstyledButton
          onClick={submit}
          className={styles[`${BLOCK_NAME}-submit-button`]}
        >
          <SendIcon fontSize="1rem" />
        </UnstyledButton>
      </div>
    </div>
  )
}
