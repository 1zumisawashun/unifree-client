'use client'

import { createStripePrices } from '@/features/product/ProductCreate/hooks/createStripePrices'
import { updateStripePrices } from '@/features/product/ProductEdit/hooks/updateStripePrices'
import { updatePrismaProduct } from '@/features/product/ProductEdit/hooks/updatePrismaProduct'
import { ProductForm } from '@/features/product/components/ProductForm'
import { imagesFactory } from '@/features/product/hooks/imagesFactory'
import { UpsertProduct } from '@/features/product/product.model'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const ProductEdit = ({
  productEntity,
  categoryOptions,
  id,
  stripePriceId
}: {
  productEntity: UpsertProduct
  categoryOptions: { value: number; label: string }[]
  id: number
  stripePriceId: string
}) => {
  const router = useRouter()
  const { serverAction } = useServerAction()

  const [isPending, setIsPending] = useState(false)

  const edit = async (data: UpsertProduct) => {
    setIsPending(true)

    const { files, name, price, categories, ...rest } = data

    try {
      const response = await updateStripePrices({ stripePriceId })
      if (!response) throw new Error()

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

      const result = await serverAction(() =>
        updatePrismaProduct({ id, params })
      )

      if (!result.ok) throw new Error('Failed to create product')

      router.push(`/products/${id}`)
      router.refresh()
    } catch (error) {
      console.log(error)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <ProductForm
      submit={edit}
      product={productEntity}
      href={`/products/${id}`}
      domain="変更する"
      isPending={isPending}
      categoryOptions={categoryOptions}
    />
  )
}
