import { Button, ButtonWrapper } from '@/components/buttons'
import { Dialog, UseDialog } from '@/components/elements/Dialog'
import styles from './styles.module.scss'

const BLOCK_NAME = 'delete-dialog'

export const DeleteDialog = ({
  dialog,
  submit
}: {
  dialog: UseDialog
  submit: () => void
}) => {
  return (
    <Dialog {...dialog}>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>本当に削除しますか？</p>
        <ButtonWrapper position="center">
          <Button onClick={dialog.close} theme="danger" variant="outlined">
            キャンセル
          </Button>
          <Button onClick={submit} theme="danger">
            削除する
          </Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  )
}
