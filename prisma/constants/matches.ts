import { faker } from "@/functions/libs/faker";
import { Prisma } from "@prisma/client";

const productsOnMatchedName1 = "World History: A Brief Overview";
const productsOnMatchedName2 = "Learning Python for Data Science";

export const matches: Prisma.MatchCreateInput[] = [
  {
    name: productsOnMatchedName1,
    users: {
      connect: [{ id: 1 }, { id: 2 }],
    },
    messages: {
      create: [
        { userId: 1, message: faker.lorem.sentences(2) },
        { userId: 2, message: faker.lorem.sentences(1) },
        { userId: 1, message: faker.lorem.sentences(1) },
        { userId: 2, message: faker.lorem.sentences(2) },
      ],
    },
  },
  {
    name: productsOnMatchedName2,
    users: {
      connect: [{ id: 1 }, { id: 2 }],
    },
    messages: {
      create: [
        { userId: 1, message: faker.lorem.sentences(2) },
        { userId: 2, message: faker.lorem.sentences(1) },
        { userId: 2, message: faker.lorem.sentences(1) },
      ],
    },
  },
];
