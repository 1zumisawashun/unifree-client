import { AdminMatchDetail } from '@/features/admin/match/AdminMatchDetail'
import { prisma } from '@/functions/libs/prisma'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const match = await prisma.match.findUnique({
    where: { id: +params.id },
    include: { users: true, messages: { include: { user: true } } }
  })

  if (!match) return notFound()

  const props = {
    matchId: match.id,
    userId: match.users[0]!.id,
    messages: match.messages
  }

  return <AdminMatchDetail {...props} />
}
