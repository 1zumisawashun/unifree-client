import { UnstyledButtonAnchor } from '@/components/buttons/UnstyledButtonAnchor'
import { ImageAsync } from '@/components/elements/ImageAsync'
import { Label } from '@/components/elements/Label'
import { formatCurrencyString } from '@/functions/helpers/formatNumber'
import { Product } from '@/functions/types/Prisma'
import { formatDistanceToNow, isBefore, subDays } from 'date-fns'
import { ja } from 'date-fns/locale'
import 'server-only'
import styles from './styles.module.scss'

const BLOCK_NAME = 'product-card'

/* eslint-disable @next/next/no-img-element */
const Item = ({ product }: { product: Product }) => {
  const { id, name, images, price, status, createdAt } = product

  const formattedPrice = formatCurrencyString(price)
  const formattedCreatedAt = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ja
  })

  const sevenDaysAgo = subDays(new Date(), 7)
  const isSevenDaysAgoBeforeCreatedAt = isBefore(sevenDaysAgo, createdAt)

  return (
    <UnstyledButtonAnchor href={`/products/${id}`}>
      <div className={styles[`${BLOCK_NAME}-wrapper`]}>
        <div className={styles[`${BLOCK_NAME}-layer`]} data-status={status}>
          <ImageAsync
            src={images[0]!.src}
            alt={images[0]!.name}
            className={styles[`${BLOCK_NAME}-image`]}
            priority
          />
          <p>SOLD OUT</p>
          <div
            data-new={isSevenDaysAgoBeforeCreatedAt}
            className={styles[`${BLOCK_NAME}-label-wrapper`]}
          >
            <Label>NEW</Label>
          </div>
        </div>
        <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
        <div className={styles[`${BLOCK_NAME}-content`]}>
          <p>{formattedPrice}</p>
          <span>|</span>
          <p>{formattedCreatedAt}</p>
        </div>
      </div>
    </UnstyledButtonAnchor>
  )
}

const List = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles[`${BLOCK_NAME}-list`]}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export const ProductCard = {
  List,
  Item
}
