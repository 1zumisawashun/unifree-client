export const books = [
  {
    id: 1,
    title: "Introduction to Programming",
    school: "駒沢大学",
    categories: [
      {
        id: 1,
        name: "Programming",
      },
    ],
    body: "This book provides a comprehensive introduction to programming concepts, covering topics such as algorithms, data structures, and problem-solving. Suitable for beginners and those looking to deepen their programming skills.",
    price: 2999,
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
    id: 2,
    title: "World History: A Brief Overview",
    school: "日本大学",
    categories: [
      {
        id: 2,
        name: "History",
      },
    ],
    body: "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    price: 2499,
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
    id: 3,
    title: "Introduction to Astrophysics",
    school: "専修大学",
    categories: [
      {
        id: 3,
        name: "Science",
      },
    ],
    body: "Delve into the mysteries of the cosmos with this introductory guide to astrophysics. From the birth of stars to the expansion of the universe, this book covers the fundamental concepts of astrophysics in an accessible manner.",
    price: 3499,
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
    id: 4,
    title: "Learning Python for Data Science",
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
    price: 3999,
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
    id: 5,
    title: "Artificial Intelligence Ethics",
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
    price: 3299,
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
