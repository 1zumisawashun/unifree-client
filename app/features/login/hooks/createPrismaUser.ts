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
    return { id: user.id, uid: user.uid, isAdmin: user.isAdmin }
  } catch (error) {
    const user = await prisma.user.create({
      data: { uid, photoURL: picture, displayName: null }
    })
    return { id: user.id, uid: user.uid, isAdmin: user.isAdmin }
  }
}
