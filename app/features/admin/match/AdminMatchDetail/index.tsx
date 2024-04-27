'use client'

import { MatchHistoryCard } from '@/features/match/components/MatchHistoryCard'
import { Messages } from '@/functions/types/Prisma'

export const AdminMatchDetail = (props: Messages) => {
  return <MatchHistoryCard.List {...props} />
}
