import styles from './styles.module.scss'

const BLOCK_NAME = 'form-wrapper'

export function FormWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles[`${BLOCK_NAME}`]}>{children}</div>
}
