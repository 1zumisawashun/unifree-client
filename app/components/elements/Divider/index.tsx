import styles from './styles.module.scss'

const BLOCK_NAME = 'divider'

export function Divider() {
  return <hr className={styles[`${BLOCK_NAME}`]} />
}
