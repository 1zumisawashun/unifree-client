import { MypageSetting } from '@/features/mypage/MypageSetting'
import { auth } from '@/functions/helpers/nextAuth/server'
import { prisma } from '@/functions/libs/prisma'

export default async function Page() {
  const { session } = await auth()
  // findFirstOrThrowでエラーが出るなんで？
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session!.user.id },
    include: { matches: true, products: true }
  })

  return <MypageSetting user={user} />
}
