'use client'

import { MatchHistory } from '@/features/match/MatchDetail/components/MatchHistory'
import { MatchTextarea } from '@/features/match/MatchDetail/components/MatchTextarea'
import { createPrismaMessage } from '@/features/match/MatchDetail/hooks/createPrismaMessage'
import { useScrollToLatest } from '@/features/match/MatchDetail/hooks/useScrollToLatest'
import { Messages } from '@/functions/types/Prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'match-detail'

export function MatchDetail(props: Messages) {
  const { userId, matchId } = props

  const { refresh } = useRouter()
  const { ref } = useScrollToLatest()

  const [message, setMessage] = useState('')

  const submit = async () => {
    const params = { message, userId, matchId }
    try {
      const response = await createPrismaMessage(params)
      if (!response) throw new Error()

      refresh()
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
            <MatchHistory {...props} />
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
