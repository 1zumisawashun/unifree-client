import { Panel } from '@/components/elements/Panel'
import { TosBody } from '@/features/tos/components/TosBody'
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
          <TosBody />
        </p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
