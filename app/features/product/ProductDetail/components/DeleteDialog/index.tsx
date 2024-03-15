'use client'

import { Button, ButtonWrapper } from '@/components/buttons'
import { Dialog, UseDialog } from '@/components/elements/Dialog'
import { deletePrismaProduct } from '@/features/product/ProductDetail/components/DeleteDialog/hooks/deletePrismaProduct'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { Product } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

const BLOCK_NAME = 'delete-dialog'

export const DeleteDialog = ({
  dialog,
  product
}: {
  dialog: UseDialog
  product: Product
}) => {
  const router = useRouter()
  const { isPending, serverAction } = useServerAction()

  const submit = async () => {
    try {
      const response = await serverAction(() =>
        deletePrismaProduct({ id: product.id })
      )

      if (!response.ok) throw new Error()

      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>本当に削除しますか？</p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            キャンセル
          </Button>
          <Button onClick={submit} theme="danger" loading={isPending}>
            削除する
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  )
}
