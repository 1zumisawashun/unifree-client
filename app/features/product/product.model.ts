import { z } from 'zod'

export const zImage = z.object({
  id: z.number().int(),
  name: z.string(),
  src: z.string(),
  productId: z.number()
})

const zUpsertProductFile = z.union([z.custom<File>(), zImage])

const zUpsertProductFiles = z.array(zUpsertProductFile)

const HALF_SIZE_NUMBER = /^[0-9]+$/

// react-hook-form
export const zUpsertProduct = z.object({
  name: z
    .string()
    .min(1, { message: '入力は必須です' })
    .max(50, { message: '50文字以下で入力してください' }), // 必須・50文字以内
  price: z
    .string()
    .min(1, { message: '入力は必須です' })
    .regex(HALF_SIZE_NUMBER, '半角数字で入力してください'), // 必須・半角数字のみ
  description: z
    .string()
    .min(1, { message: '入力は必須です' })
    .max(1000, { message: '1000文字以下で入力してください' }), // 必須・1000文字以内
  files: zUpsertProductFiles, // 必須・4文字以内
  status: z.string().min(1, { message: '選択は必須です' }), // 必須
  paymentMethod: z.string().min(1, { message: '選択は必須です' }), // 必須
  categories: z.array(z.string()).min(1, { message: '選択は必須です' }) // 必須
})

export const productEntity: UpsertProduct = {
  name: '',
  price: '',
  description: '',
  files: [],
  status: '',
  paymentMethod: '',
  categories: []
}

export type UpsertProduct = z.infer<typeof zUpsertProduct>
