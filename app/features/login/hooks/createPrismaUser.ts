import { prisma } from '@/functions/libs/prisma'

type Props = {
  uid: string
  picture?: string
}

export async function createPrismaUser({ uid, picture }: Props) {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: { uid }
    })
    console.log('user.findFirstOrThrow', user)
    return { id: user.id, uid: user.uid }
  } catch (error) {
    const user = await prisma.user.create({
      data: { uid, photoURL: picture, displayName: null }
    })
    console.log('user.create', user)
    return { id: user.id, uid: user.uid }
  }
}
