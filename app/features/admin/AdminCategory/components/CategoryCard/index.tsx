import { IconButton } from '@/components/buttons'
import { useDialog } from '@/components/elements/Dialog/hooks/useDialog'
import { DeleteDialog } from '@/features/admin/AdminCategory/components/DeleteDialog'
import { Category } from '@/functions/types/Prisma'
import { ElementRef, forwardRef } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'category-card'

type Props = {
  category: Category
}

type Ref = ElementRef<'li'>

const Item = forwardRef<Ref, Props>(({ category }, ref) => {
  const dialog = useDialog()

  return (
    <>
      <li className={styles[`${BLOCK_NAME}`]} ref={ref}>
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <p className={styles[`${BLOCK_NAME}-name`]}>{category?.name}</p>
          <IconButton name="cross" size="small" onClick={dialog.open} />
        </div>
      </li>
      <DeleteDialog dialog={dialog} category={category} />
    </>
  )
})

Item.displayName = 'Item'

const List = ({ categories }: { categories: Category[] }) => {
  if (categories.length === 0) return null

  return (
    <ul className={styles[`${BLOCK_NAME}-container`]}>
      {categories.map((category) => (
        <Item category={category} key={category.id} />
      ))}
    </ul>
  )
}

export const CategoryCard = {
  List,
  Item
}
