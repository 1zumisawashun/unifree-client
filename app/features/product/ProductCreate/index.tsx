'use client'

import { createPrismaProduct } from '@/features/product/ProductCreate/hooks/createPrismaProduct'
import { createStripePrices } from '@/features/product/ProductCreate/hooks/createStripePrices'
import { ProductForm } from '@/features/product/components/ProductForm'
import { imagesFactory } from '@/features/product/hooks/imagesFactory'
import { UpsertProduct, productEntity } from '@/features/product/product.schema'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const ProductCreate = ({
  categoryOptions
}: {
  categoryOptions: { value: number; label: string }[]
}) => {
  const router = useRouter()
  const { serverAction } = useServerAction()

  const [isPending, setIsPending] = useState(false)

  const create = async (data: UpsertProduct) => {
    setIsPending(true)

    const { files, name, price, categories, ...rest } = data

    try {
      const images = await imagesFactory({ files })

      const stripeIds = await createStripePrices({ name, price })

      const params = {
        ...rest,
        name,
        price: Number(price),
        categories: categories.map(Number),
        images,
        ...stripeIds
      }

      const response = await serverAction(() => createPrismaProduct(params))

      if (!response.ok) throw new Error('Failed to create product')

      router.push(`/products`)
      router.refresh()
    } catch (error) {
      console.log(error)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <ProductForm
      submit={create}
      product={productEntity}
      href={'/products'}
      domain="作成する"
      isPending={isPending}
      categoryOptions={categoryOptions}
    />
  )
}
