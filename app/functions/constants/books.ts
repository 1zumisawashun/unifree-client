export const books = [
  {
    // for stripe
    id: "price_1Oc8ATEjv771bjTX4GMiBBJ6",
    name: "Introduction to Programming",
    price: 2999,
    active: true,
    // custom
    school: "駒沢大学",
    categories: [
      {
        id: 1,
        name: "Programming",
      },
    ],
    body: "This book provides a comprehensive introduction to programming concepts, covering topics such as algorithms, data structures, and problem-solving. Suitable for beginners and those looking to deepen their programming skills.",
    status: "completed",
    images: [
      {
        id: 1,
        src: "https://placehold.jp/400x250.png",
      },
    ],
    createdAt: "2023-01-01T12:00:00Z",
    updatedAt: "2023-01-05T15:30:00Z",
  },
  {
    // for stripe
    id: "price_1N4x5MEjv771bjTXkgcCTNnH",
    name: "World History: A Brief Overview",
    price: 2499,
    active: true,
    // custom
    school: "日本大学",
    categories: [
      {
        id: 2,
        name: "History",
      },
    ],
    body: "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    status: "available",
    images: [
      {
        id: 2,
        src: "https://placehold.jp/400x250.png",
      },
    ],
    createdAt: "2023-02-10T09:45:00Z",
    updatedAt: "2023-02-15T18:20:00Z",
  },
  {
    // for stripe
    id: "price_1N4x4gEjv771bjTXW65kuNYe",
    name: "Introduction to Astrophysics",
    price: 3499,
    active: true,
    // custom
    school: "専修大学",
    categories: [
      {
        id: 3,
        name: "Science",
      },
    ],
    body: "Delve into the mysteries of the cosmos with this introductory guide to astrophysics. From the birth of stars to the expansion of the universe, this book covers the fundamental concepts of astrophysics in an accessible manner.",
    status: "available",
    images: [
      {
        id: 3,
        src: "https://placehold.jp/400x250.png",
      },
    ],
    createdAt: "2023-03-20T14:10:00Z",
    updatedAt: "2023-03-25T11:55:00Z",
  },
  {
    // for stripe
    id: "price_1N4x2fEjv771bjTXiqY0QH5h",
    name: "Learning Python for Data Science",
    price: 3999,
    active: true,
    // custom
    school: "東洋大学",
    categories: [
      {
        id: 1,
        name: "Programming",
      },
      {
        id: 4,
        name: "Data Science",
      },
    ],
    body: "Unlock the power of Python for data analysis and machine learning. This book provides hands-on examples and practical tips for leveraging Python in the field of data science.",
    status: "available",
    images: [
      {
        id: 4,
        src: "https://placehold.jp/400x250.png",
      },
    ],
    createdAt: "2023-04-05T08:30:00Z",
    updatedAt: "2023-04-10T16:45:00Z",
  },
  {
    // for stripe
    id: "price_1MUi0HEjv771bjTXHmDQ2BET",
    name: "Artificial Intelligence Ethics",
    price: 3299,
    active: true,
    // custom
    school: "東海大学",
    categories: [
      {
        id: 5,
        name: "Artificial Intelligence",
      },
      {
        id: 6,
        name: "Ethics",
      },
    ],
    body: "Explore the ethical considerations surrounding artificial intelligence. This book examines the impact of AI on society, privacy, and decision-making, providing insights for a responsible AI future.",
    status: "available",
    images: [
      {
        id: 5,
        src: "https://placehold.jp/400x250.png",
      },
    ],
    createdAt: "2023-05-15T10:20:00Z",
    updatedAt: "2023-05-20T13:55:00Z",
  },
];

export type Book = (typeof books)[number];
