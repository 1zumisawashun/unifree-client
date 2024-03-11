'use client'

import { Button, ButtonWrapper } from '@/components/buttons'
import { Dialog, UseDialog } from '@/components/elements/Dialog'
import { CartItem as ICartItem } from '@/functions/constants/cart'
import { useShoppingCart } from 'use-shopping-cart'
import styles from './styles.module.scss'

const BLOCK_NAME = 'remove-dialog'

export const RemoveDialog = ({
  dialog,
  cart
}: {
  dialog: UseDialog
  cart: ICartItem
}) => {
  const { removeItem } = useShoppingCart()

  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>
          カートから取り除きますか？
        </p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            キャンセル
          </Button>
          <Button onClick={() => removeItem(cart.id)} theme="danger">
            取り除く
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  )
}
