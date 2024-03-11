'use client'

import { ButtonWrapper, UnstyledButtonAnchor } from '@/components/buttons'
import { Label } from '@/components/elements/Label'
import { Category } from '@/functions/types/Prisma'
import styles from './styles.module.scss'

const BLOCK_NAME = 'product-category'

export const ProductCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <ButtonWrapper className={styles[`${BLOCK_NAME}-wrapper`]}>
      {categories.map((category) => (
        <UnstyledButtonAnchor
          key={category.id}
          href={{
            pathname: '/results',
            query: { category: category.name }
          }}
        >
          <Label>{category.name}</Label>
        </UnstyledButtonAnchor>
      ))}
    </ButtonWrapper>
  )
}
