'use server'

import { prisma } from '@/functions/libs/prisma'

type Props = {
  userId: number
  matchId: number
  message: string
}

export async function createPrismaMessage({ userId, matchId, message }: Props) {
  try {
    const response = await prisma.message.create({
      data: { userId, matchId, message }
    })
    if (!response) throw new Error('Message not created')
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false }
  }
}
