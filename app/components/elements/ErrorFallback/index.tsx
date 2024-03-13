import { Panel } from '@/components/elements/Panel'
import styles from './styles.module.scss'

const BLOCK_NAME = 'error-fallback'

export const ErrorFallback = ({ message }: { message: string }) => {
  return (
    <Panel.Flame theme="danger">
      <Panel.Inner>
        <h3 className={styles[`${BLOCK_NAME}-title`]}>
          Something went wrong!{/* Error while fetching data. */}
        </h3>
        <p>{message ?? 'Something seriously bad happened.'}</p>
      </Panel.Inner>
    </Panel.Flame>
  )
}
