import { faker } from '@/functions/libs/faker'
import { Product } from '@/functions/types/Prisma'
import { categories } from './category.mock'
import { images } from './image.mock'
import { user1 } from './user.mock'

export const products: Product[] = [
  {
    id: 1,
    name: faker.commerce.productName(),
    price: +faker.commerce.price({ min: 1000, max: 2000, dec: 0 }),
    active: true,
    description: faker.commerce.productDescription(),
    paymentMethod: 'Delivery Locker',
    status: 'completed',
    categories,
    images,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    user: user1
  }
]
