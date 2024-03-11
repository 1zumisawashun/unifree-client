'use client'

import { editPrismaProduct } from '@/features/product/ProductEdit/hooks/editPrismaProduct'
import { ProductForm } from '@/features/product/components/ProductForm'
import { createStripePrices } from '@/features/product/hooks/createStripePrices'
import { editStripePrices } from '@/features/product/hooks/editStripePrices'
import { imagesFactory } from '@/features/product/hooks/imagesFactory'
import { UpsertProduct } from '@/features/product/product.model'
import { Product } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const ProductEdit = ({ product }: { product: Product }) => {
  const {
    name,
    price,
    description,
    images,
    status,
    paymentMethod: payment_method,
    categories
  } = product

  const productEntity = {
    name,
    price: price.toString(),
    description,
    files: images,
    status,
    paymentMethod: payment_method!,
    categories: categories.map((category) => category.id.toString())
  }

  const router = useRouter()

  const [isPending, setIsPending] = useState(false)

  const edit = async (data: UpsertProduct) => {
    setIsPending(true)

    const { files, name, price, categories, ...rest } = data

    try {
      const response = await editStripePrices({ product })
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

      const json = await editPrismaProduct({ product, params })
      if (!json) throw new Error()

      router.push(`/products/${product.id}`)
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
      href={`/products/${product.id}`}
      domain="変更する"
      isPending={isPending}
    />
  )
}
