import { UnstyledButtonAnchor } from '@/components/buttons/UnstyledButtonAnchor'
import { ImageAsync } from '@/components/elements/ImageAsync'
import { Label } from '@/components/elements/Label'
import { formatCurrencyString } from '@/functions/helpers/formatNumber'
import { Product } from '@/functions/types/Prisma'
import { formatDistanceToNow, isBefore, subDays } from 'date-fns'
import { ja } from 'date-fns/locale'
import styles from './styles.module.scss'

const BLOCK_NAME = 'product-card'

// NOTE:本来はstateを使ってlookupした方が良いがサバコンなので愚直に条件分岐させる
const ProductCardLabel = ({
  isNew,
  hasPr
}: {
  isNew: boolean
  hasPr: boolean
}) => {
  if (hasPr) {
    return (
      <Label theme="danger" className={styles[`${BLOCK_NAME}-label`]}>
        PR
      </Label>
    )
  }
  if (isNew) {
    return (
      <Label theme="primary" className={styles[`${BLOCK_NAME}-label`]}>
        NEW
      </Label>
    )
  }
  return null
}

/* eslint-disable @next/next/no-img-element */
const Item = ({ product }: { product: Product }) => {
  const { id, name, images, price, status, createdAt, categories } = product

  const formattedPrice = formatCurrencyString(price)
  const formattedCreatedAt = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ja
  })

  const hasPr = categories.some((category) => category.name === 'PR')

  const sevenDaysAgo = subDays(new Date(), 7)
  const isNew = isBefore(sevenDaysAgo, createdAt)

  return (
    <UnstyledButtonAnchor
      href={`/products/${id}`}
      className={styles[`${BLOCK_NAME}`]}
    >
      <div className={styles[`${BLOCK_NAME}-layer`]} data-status={status}>
        <ImageAsync
          src={images[0]!.src}
          alt={images[0]!.name}
          className={styles[`${BLOCK_NAME}-image`]}
          priority
        />
        <p>SOLD OUT</p>
        <ProductCardLabel isNew={isNew} hasPr={hasPr} />
      </div>
      <p className={styles[`${BLOCK_NAME}-title`]}>{name}</p>
      <div className={styles[`${BLOCK_NAME}-content`]}>
        <p>{formattedPrice}</p>
        <span>|</span>
        <p>{formattedCreatedAt}</p>
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
