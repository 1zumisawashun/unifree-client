import styles from './styles.module.scss'

const BLOCK_NAME = 'table'

/**
 * @description 以下のエラーに引っかかったのでDOM構造に気をつける
 * @see https://github.com/facebook/react/issues/5652
 */
export const Table = <T extends { id: number | string }>(props: {
  rows: T[]
  render: React.FC<T>
}) => {
  return (
    <table className={styles[`${BLOCK_NAME}`]}>
      <tbody className={styles[`${BLOCK_NAME}-body`]}>
        {props.rows.map((row) => (
          <props.render {...row} key={row.id} />
        ))}
      </tbody>
    </table>
  )
}
