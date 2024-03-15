'use server'

import { UpsertUser } from '@/features/mypage/mypage.schema'
import { prisma } from '@/functions/libs/prisma'

type Props = { userId: number } & UpsertUser

export async function editPrismaUser({ userId, ...rest }: Props) {
  try {
    const response = await prisma.user.update({
      where: { id: userId },
      data: rest
    })
    if (!response) throw new Error('Failed to update user')

    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false }
  }
}
