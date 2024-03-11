import { Panel } from '@/components/elements/Panel'
import styles from './styles.module.scss'

const BLOCK_NAME = 'empty-fallback'

export const EmptyFallback = () => {
  return (
    <Panel.Flame theme="primary">
      <Panel.Inner>
        <h3 className={styles[`${BLOCK_NAME}-title`]}>No data.</h3>
        <p>Something seriously bad happened.</p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
