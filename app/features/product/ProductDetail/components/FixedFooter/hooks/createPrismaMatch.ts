'use server'

// import { API } from '@/functions/constants/api'
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
    console.log(response)
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false }
  } finally {
    revalidatePath('/')
  }
}

// export async function createPrismaMatch2({
//   currentUserId,
//   opponentUserId,
//   id
// }: Props) {
//   const url = API.createPrismaMatch

//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({ currentUserId, opponentUserId, id })
//   })

//   return response.ok
// }
