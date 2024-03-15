'use client'

import { CategoryCard } from '@/features/admin/AdminCategory/components/CategoryCard'
import { CategoryForm } from '@/features/admin/AdminCategory/components/CategoryForm'
import { Category } from '@/functions/types/Prisma'
import styles from './styles.module.scss'

const BLOCK_NAME = 'admin-category'

export const AdminCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <CategoryForm />
      <CategoryCard.List categories={categories} />
    </div>
  )
}
