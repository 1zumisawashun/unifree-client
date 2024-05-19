'use client'

import { InputText } from '@/components/forms'
import { useRouter } from 'next/navigation'
import { BaseSyntheticEvent, useState } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'search-bar'

/** @see https://azukiazusa.dev/blog/the-search-element-has-been-added-to-the-html-specification/ */
export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    router.push(`/results?name=${search}`)
  }

  return (
    <search>
      <form onSubmit={handleSubmit} className={styles[`${BLOCK_NAME}-form`]}>
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="教科書名で検索する...."
          width="full"
        />
      </form>
    </search>
  )
}
