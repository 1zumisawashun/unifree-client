'use server'

import { prisma } from '@/functions/libs/prisma'
import { revalidatePath } from 'next/cache'

type Props = {
  currentUserId: number
  opponentUserId: number
  id: number
}

// use-transitionを使ったserver-actionsの例
export async function createPrismaMatch({
  currentUserId,
  opponentUserId,
  id
}: Props) {
  try {
    const response = await prisma.match.create({
      data: {
        product: {
          connect: {
            id
          }
        },
        users: {
          connect: [
            {
              id: currentUserId
            },
            { id: opponentUserId }
          ]
        }
      }
    })
    if (!response) throw new Error('Failed to create match')

    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false }
  } finally {
    revalidatePath('/')
  }
}
