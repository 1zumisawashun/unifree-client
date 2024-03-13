import { faker } from '@/functions/libs/faker'
import { Prisma } from '@prisma/client'

export const matches: Prisma.MatchCreateInput[] = [
  {
    product: {
      connect: { id: 1 }
    },
    users: {
      connect: [{ id: 1 }, { id: 2 }]
    },
    messages: {
      create: [
        { userId: 1, message: faker.lorem.sentences(2) },
        { userId: 2, message: faker.lorem.sentences(1) },
        { userId: 1, message: faker.lorem.sentences(1) },
        { userId: 2, message: faker.lorem.sentences(2) }
      ]
    }
  },
  {
    product: {
      connect: { id: 2 }
    },
    users: {
      connect: [{ id: 1 }, { id: 2 }]
    },
    messages: {
      create: [
        { userId: 1, message: faker.lorem.sentences(2) },
        { userId: 2, message: faker.lorem.sentences(1) },
        { userId: 2, message: faker.lorem.sentences(1) }
      ]
    }
  }
]
