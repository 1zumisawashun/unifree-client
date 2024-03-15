'use client'

import { Button, ButtonWrapper } from '@/components/buttons'
import { Dialog, UseDialog } from '@/components/elements/Dialog'
import { deletePrismaCategory } from '@/features/admin/AdminCategory/components/DeleteDialog/hooks/deletePrismaCategory'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { Category } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

const BLOCK_NAME = 'delete-dialog'

export const DeleteDialog = ({
  dialog,
  category
}: {
  dialog: UseDialog
  category: Category
}) => {
  const router = useRouter()
  const { isPending, serverAction } = useServerAction()

  const submit = async () => {
    try {
      const response = await serverAction(() =>
        deletePrismaCategory({ id: category.id })
      )

      if (!response) throw new Error()

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
