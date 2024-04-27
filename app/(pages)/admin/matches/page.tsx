import { EmptyFallback } from '@/components/elements/EmptyFallback'
import { MypageMatch } from '@/features/mypage/MypageMatch'
import { prisma } from '@/functions/libs/prisma'

export default async function Page() {
  const matches = await prisma.match.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      users: true,
      messages: true,
      product: { select: { name: true } }
    }
  })

  const rows = matches.map((match, index) => {
    const hasMessage = match.messages.length !== 0
    const latestMessage = match.messages.reverse()[0]?.message ?? ''

    return {
      id: index + 1,
      title: match.product.name,
      annotation: hasMessage ? latestMessage : 'no messages',
      href: `/admin/matches/${match.id}`
    }
  })

  const hasMatches = rows.length > 0

  if (hasMatches) {
    return <MypageMatch rows={rows} />
  }
  return <EmptyFallback />
}
