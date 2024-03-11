import { MatchDetail } from '@/features/match/MatchDetail'
import { auth } from '@/functions/helpers/nextAuth/server'
import { prisma } from '@/functions/libs/prisma'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const { session } = await auth()

  const match = await prisma.match.findUnique({
    where: { id: +params.id },
    include: { messages: { include: { user: true } } }
  })

  if (!match) {
    return notFound()
  }

  const props = {
    matchId: match.id,
    userId: session!.user.id,
    messages: match.messages
  }

  return <MatchDetail {...props} />
}
