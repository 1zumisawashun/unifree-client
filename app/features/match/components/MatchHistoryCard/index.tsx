'use client'

import { Avatar } from '@/components/elements/Avatar'
import { formatLinkableText } from '@/functions/helpers/formatString'
import { Message, Messages } from '@/functions/types/Prisma'
import styles from './styles.module.scss'

const BLOCK_NAME = 'match-history'

const Item = ({ message, userId }: { message: Message; userId: number }) => {
  const isCurrentUser = message.userId === userId
  return (
    <li className={styles[`${BLOCK_NAME}-container`]} key={message.id}>
      <div className={styles[`${BLOCK_NAME}-user-thumbnail-wrapper`]}>
        <Avatar />
      </div>
      <div className={styles[`${BLOCK_NAME}-content-wrapper`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>
          {message.user.displayName ?? '匿名'}
        </p>
        <div
          className={styles[`${BLOCK_NAME}-message-wrapper`]}
          data-current-user={isCurrentUser}
        >
          <p
            className={styles[`${BLOCK_NAME}-message`]}
            dangerouslySetInnerHTML={{
              __html: formatLinkableText(message.message)
            }}
          />
        </div>
        <p className={styles[`${BLOCK_NAME}-text`]}>
          {message.createdAt.toLocaleString()}
        </p>
      </div>
    </li>
  )
}

function List({ messages, userId }: Messages) {
  return (
    <ul>
      {messages.map((message) => (
        <Item key={message.id} message={message} userId={userId} />
      ))}
    </ul>
  )
}

export const MatchHistoryCard = {
  Item,
  List
}
