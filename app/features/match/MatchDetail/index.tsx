'use client'

import { MatchTextarea } from '@/features/match/MatchDetail/components/MatchTextarea'
import { createPrismaMessage } from '@/features/match/MatchDetail/hooks/createPrismaMessage'
import { useScrollToLatest } from '@/features/match/MatchDetail/hooks/useScrollToLatest'
import { MatchHistoryCard } from '@/features/match/components/MatchHistoryCard'
import { useServerAction } from '@/functions/hooks/useServerAction'
import { Messages } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'match-detail'

export function MatchDetail(props: Messages) {
  const { userId, matchId } = props

  const router = useRouter()
  const { serverAction } = useServerAction()
  const { ref } = useScrollToLatest()

  const [message, setMessage] = useState('')

  const submit = async () => {
    try {
      const response = await serverAction(() =>
        createPrismaMessage({ message, userId, matchId })
      )

      if (!response.ok) throw new Error()

      router.refresh()
      setMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles[`${BLOCK_NAME}-container`]}>
      <div className={styles[`${BLOCK_NAME}-section`]}>
        <div className={styles[`${BLOCK_NAME}-scrollable-content`]} ref={ref}>
          <div className={styles[`${BLOCK_NAME}-scrollable-inner`]}>
            <MatchHistoryCard.List {...props} />
          </div>
        </div>
      </div>

      <div>
        <MatchTextarea
          submit={submit}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </main>
  )
}
