'use client'

import { Button, ButtonWrapper } from '@/components/buttons'
import { Dialog, UseDialog } from '@/components/elements/Dialog'
import { Swiper } from '@/components/elements/Swiper'
import { Image } from '@/functions/types/Prisma'
import styles from './styles.module.scss'

const BLOCK_NAME = 'preview-dialog'

type ImageWithoutProductId = Omit<Image, 'productId'>

/* eslint-disable @next/next/no-img-element */
export const PreviewDialog = ({
  dialog,
  images
}: {
  dialog: UseDialog
  images?: ImageWithoutProductId[]
}) => {
  const hasSwiper = images && images.length > 1
  return (
    <Dialog {...dialog} hasSwiper={hasSwiper} width='sp'>
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プレビューダイアログ</p>
        {images && (
          <Swiper
            rows={images}
            render={(props) => <ImageRender {...props} />}
          />
        )}
        <ButtonWrapper position="end">
          <Button onClick={dialog.close}>Close</Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  )
}

const ImageRender = ({ src, name }: ImageWithoutProductId) => {
  return (
    <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
      <img src={src} alt={name} className={styles[`${BLOCK_NAME}-image`]} />
    </div>
  )
}
