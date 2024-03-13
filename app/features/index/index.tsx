import { ButtonAnchor } from '@/components/buttons'
import 'server-only'
import styles from './styles.module.scss'

const BLOCK_NAME = 'index'

export function Index({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <p className={styles[`${BLOCK_NAME}-text`]}>
        必要なものを必要な人へ
        <br />
        あなたの要らないが誰かの役に立つ
      </p>
      <p className={styles[`${BLOCK_NAME}-label`]}>
        UniFliは北海道大学生のための教科書フリマアプリです
      </p>
      <div className={styles[`${BLOCK_NAME}-button-wrapper`]}>
        <ButtonAnchor href={'/products'} size="large" variant="outlined">
          教科書を探す
        </ButtonAnchor>
        {isAuthenticated ? (
          <ButtonAnchor
            href={'/products/create'}
            size="large"
            variant="outlined"
          >
            教科書を売る
          </ButtonAnchor>
        ) : (
          <ButtonAnchor href={'/login'} size="large" variant="outlined">
            ログインする
          </ButtonAnchor>
        )}
      </div>
    </div>
  )
}
