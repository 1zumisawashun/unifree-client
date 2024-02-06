import { Prisma } from "@prisma/client";

export const products: Prisma.ProductCreateInput[] = [
  {
    stripePriceId: "price_1Oc8ATEjv771bjTX4GMiBBJ6",
    stripeProductId: "product_1Oc8ATEjv771bjTX4GMiBBJ6",
    name: "Introduction to Programming",
    price: 2999,
    active: true,
    description:
      "This book provides a comprehensive introduction to programming concepts, covering topics such as algorithms, data structures, and problem-solving. Suitable for beginners and those looking to deepen their programming skills.",
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
    name: "World History: A Brief Overview",
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
    name: "Introduction to Astrophysics",
    price: 3499,
    active: true,
    description:
      "Delve into the mysteries of the cosmos with this introductory guide to astrophysics. From the birth of stars to the expansion of the universe, this book covers the fundamental concepts of astrophysics in an accessible manner.",
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
    name: "Learning Python for Data Science",
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
    name: "Artificial Intelligence Ethics",
    price: 3299,
    active: true,
    description:
      "Explore the ethical considerations surrounding artificial intelligence. This book examines the impact of AI on society, privacy, and decision-making, providing insights for a responsible AI future.",
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
