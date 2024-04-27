import { user1, user2 } from '@/__tests__/utilities/user.mock'
import { faker } from '@/functions/libs/faker'

const currentUserMessage = {
  id: 1,
  userId: 1,
  matchId: 1,
  message: faker.lorem.sentences(4),
  read: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  user: user1
}

const opponentUserMessage = {
  id: 2,
  userId: 2,
  matchId: 1,
  message: faker.lorem.sentences(4),
  read: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  user: user2
}

export const mixMesagges = [
  currentUserMessage,
  opponentUserMessage
  // currentUserMessage,
  // opponentUserMessage
]

export const onlyCurrentUserMessages = [currentUserMessage]

export const onlyOpponentUserMessages = [opponentUserMessage]
