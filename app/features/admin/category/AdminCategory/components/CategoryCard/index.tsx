import { IconButton } from '@/components/buttons'
import { DeleteDialog } from '@/components/elements/DeleteDialog'
import { deletePrismaCategory } from '@/features/admin/category/AdminCategory/components/CategoryCard/hooks/deletePrismaCategory'
import { useDialog } from '@/functions/hooks/useDialog'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { Category } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import { ElementRef, forwardRef } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'category-card'

type Props = {
  category: Category
}

type Ref = ElementRef<'li'>

const Item = forwardRef<Ref, Props>(({ category }, ref) => {
  const dialog = useDialog()
  const router = useRouter()
  const { serverAction } = useServerAction()

  const submit = async () => {
    try {
      const response = await serverAction(() =>
        deletePrismaCategory({ id: category.id })
      )

      if (!response) throw new Error()

      dialog.close()
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <li className={styles[`${BLOCK_NAME}`]} ref={ref}>
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <p className={styles[`${BLOCK_NAME}-name`]}>{category?.name}</p>
          <IconButton name="cross" size="small" onClick={dialog.open} />
        </div>
      </li>
      <DeleteDialog dialog={dialog} submit={submit} />
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
