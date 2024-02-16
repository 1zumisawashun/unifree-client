import { faker } from "@/functions/libs/faker";
import { Prisma } from "@prisma/client";

const productsOnMatchedName1 = "World History: A Brief Overview";
const productsOnMatchedName2 = "Learning Python for Data Science";

export const products: Prisma.ProductCreateInput[] = [
  {
    stripePriceId: "price_1Oc8ATEjv771bjTX4GMiBBJ6",
    stripeProductId: "product_1Oc8ATEjv771bjTX4GMiBBJ6",
    name: faker.commerce.productName(),
    price: +faker.commerce.price({ min: 1000, max: 2000, dec: 0 }),
    active: true,
    description: faker.commerce.productDescription(),
    paymentMethod: "Delivery Locker",
    status: "completed",
    categories: {
      connect: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
    images: {
      create: [
        { name: "sample1", src: "https://placehold.jp/400x250.png" },
        { name: "sample2", src: "https://placehold.jp/400x250.png" },
        { name: "sample3", src: "https://placehold.jp/400x250.png" },
      ],
    },
    user: {
      connect: { id: 1 },
    },
  },
  {
    stripePriceId: "price_1N4x5MEjv771bjTXkgcCTNnH",
    stripeProductId: "product_1N4x5MEjv771bjTXkgcCTNnH",
    name: productsOnMatchedName1,
    price: 2499,
    active: true,
    description:
      "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    paymentMethod: "Delivery Locker",
    status: "available",
    categories: {
      connect: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
    images: {
      create: [{ name: "sample4", src: "https://placehold.jp/400x250.png" }],
    },
    user: {
      connect: { id: 1 },
    },
  },
  {
    stripePriceId: "price_1N4x4gEjv771bjTXW65kuNYe",
    stripeProductId: "product_1N4x4gEjv771bjTXW65kuNYe",
    name: faker.commerce.productName(),
    price: +faker.commerce.price({ min: 1000, max: 2000, dec: 0 }),
    active: true,
    description: faker.commerce.productDescription(),
    paymentMethod: "Delivery Locker",
    status: "available",
    categories: {
      connect: [
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
    images: {
      create: [
        { name: "sample5", src: "https://placehold.jp/400x250.png" },
        { name: "sample6", src: "https://placehold.jp/400x250.png" },
      ],
    },
    user: {
      connect: { id: 1 },
    },
  },
  {
    stripePriceId: "price_1N4x2fEjv771bjTXiqY0QH5h",
    stripeProductId: "product_1N4x2fEjv771bjTXiqY0QH5h",
    name: productsOnMatchedName2,
    price: 3999,
    active: true,
    description:
      "Unlock the power of Python for data analysis and machine learning. This book provides hands-on examples and practical tips for leveraging Python in the field of data science.",
    paymentMethod: "Delivery Locker",
    status: "available",
    categories: {
      connect: [
        {
          id: 6,
        },
      ],
    },
    images: {
      create: [
        { name: "sample7", src: "https://placehold.jp/400x250.png" },
        { name: "sample8", src: "https://placehold.jp/400x250.png" },
        { name: "sample9", src: "https://placehold.jp/400x250.png" },
      ],
    },
    user: {
      connect: { id: 1 },
    },
  },
  {
    stripePriceId: "price_1MUi0HEjv771bjTXHmDQ2BET",
    stripeProductId: "product_1MUi0HEjv771bjTXHmDQ2BET",
    name: faker.commerce.productName(),
    price: +faker.commerce.price({ min: 1000, max: 2000, dec: 0 }),
    active: true,
    description: faker.commerce.productDescription(),
    paymentMethod: "Delivery Locker",
    status: "completed",
    categories: {
      connect: [
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    },
    images: {
      create: [{ name: "sample10", src: "https://placehold.jp/400x250.png" }],
    },
    user: {
      connect: { id: 1 },
    },
  },
];
