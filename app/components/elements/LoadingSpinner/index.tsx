import styles from './styles.module.scss'

const BLOCK_NAME = 'loading-spinner'

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles[`${BLOCK_NAME}-overlay`]}>
      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        <span className={styles[`${BLOCK_NAME}-main`]} />
      </div>
    </div>
  )
}
