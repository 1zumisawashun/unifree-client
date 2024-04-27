'use client'

import { Button, ButtonAnchor, ButtonWrapper } from '@/components/buttons'
import { DeleteDialog } from '@/components/elements/DeleteDialog'
import { Panel } from '@/components/elements/Panel'
import { ProductCategory } from '@/features/product/ProductDetail/components/ProductCategory'
import { ProductImage } from '@/features/product/ProductDetail/components/ProductImage'
import { deletePrismaProduct } from '@/features/product/ProductDetail/hooks/deletePrismaProduct'
import { formatCurrencyString } from '@/functions/helpers/formatNumber'
import { useDialog } from '@/functions/hooks/useDialog'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { Product } from '@/functions/types/Prisma'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

const BLOCK_NAME = 'product-detail'

export const ProductDetail = ({ product }: { product: Product }) => {
  const { id, name, categories, description, images, price, user, createdAt } =
    product

  const dialog = useDialog()
  const session = useSession()
  const router = useRouter()
  const { serverAction } = useServerAction()

  const submit = async () => {
    try {
      const response = await serverAction(() => deletePrismaProduct({ id }))

      if (!response.ok) throw new Error()

      dialog.close()
      router.refresh()
      router.push('/products')
    } catch (error) {
      console.log(error)
    }
  }

  const shouldShow = user.id === session.data?.user.id

  return (
    <>
      <Panel.Flame hasBorder>
        <Panel.Inner>
          <ProductImage images={images} />
          <h3 className={styles[`${BLOCK_NAME}-title`]}>{name}</h3>

          {categories ? <ProductCategory categories={categories} /> : null}

          <p className={styles[`${BLOCK_NAME}-price`]}>
            {formatCurrencyString(price)}
          </p>

          <p className={styles[`${BLOCK_NAME}-text`]}>
            {createdAt.toLocaleDateString()} に出品しました
          </p>

          <p className={styles[`${BLOCK_NAME}-text`]}>{description}</p>

          {shouldShow && (
            <ButtonWrapper position="end">
              <Button onClick={dialog.open} variant="outlined" theme="danger">
                削除する
              </Button>
              <ButtonAnchor href={`/products/${id}/edit`} variant="outlined">
                変更する
              </ButtonAnchor>
            </ButtonWrapper>
          )}
        </Panel.Inner>
      </Panel.Flame>

      <DeleteDialog dialog={dialog} submit={submit} />
    </>
  )
}
