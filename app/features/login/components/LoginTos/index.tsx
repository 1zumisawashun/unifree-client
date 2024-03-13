import { Nl2br } from '@/components/elements/Nl2br'
import { Panel } from '@/components/elements/Panel'
import { tos } from '@/functions/constants/tos'
import styles from './styles.module.scss'

const BLOCK_NAME = 'login-tos'

export function LoginTos() {
  return (
    <Panel.Flame
      scrollable
      hasBorder
      className={styles[`${BLOCK_NAME}-panel-wrapper`]}
    >
      <Panel.Inner>
        <p className={styles[`${BLOCK_NAME}-panel-text`]}>
          <Nl2br>{tos}</Nl2br>
        </p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
