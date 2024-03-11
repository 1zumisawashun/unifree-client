import { Panel } from '@/components/elements/Panel'
import styles from './styles.module.scss'

const BLOCK_NAME = 'not-found-fallback'

export const NotFoundFallback = () => {
  return (
    <Panel.Flame theme="primary">
      <Panel.Inner>
        <h3 className={styles[`${BLOCK_NAME}-title`]}>Not Found.</h3>
        <p>Something seriously bad happened.</p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
