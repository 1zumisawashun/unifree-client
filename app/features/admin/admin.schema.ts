import { z } from 'zod'

// react-hook-form
export const zUpsertCategory = z.object({
  name: z
    .string()
    .min(1, { message: '入力は必須です' })
    .max(50, { message: '50文字以下で入力してください' }) // 必須・50文字以内
})

export type UpsertCategory = z.infer<typeof zUpsertCategory>
