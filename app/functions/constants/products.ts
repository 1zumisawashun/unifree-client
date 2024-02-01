import { Products } from "@/functions/models/Products";
export const products: Products = [
  {
    id: 1,
    stripe_price_id: "price_1Oc8ATEjv771bjTX4GMiBBJ6",
    stripe_product_id: "price_1Oc8ATEjv771bjTX4GMiBBJ6",
    name: "Introduction to Programming",
    price: 2999,
    active: true,
    description:
      "This book provides a comprehensive introduction to programming concepts, covering topics such as algorithms, data structures, and problem-solving. Suitable for beginners and those looking to deepen their programming skills.",
    payment_method: "",
    status: "completed",
    categories: [
      {
        id: 1,
        name: "Programming",
      },
    ],
    images: [
      {
        id: 1,
        name: "sample1",
        src: "https://placehold.jp/400x250.png",
      },
    ],
    created_user: "uid",
    created_at: "1678833149",
    updated_at: "1678833149",
  },
  {
    id: 2,
    stripe_price_id: "price_1N4x5MEjv771bjTXkgcCTNnH",
    stripe_product_id: "price_1N4x5MEjv771bjTXkgcCTNnH",
    name: "World History: A Brief Overview",
    price: 2499,
    active: true,
    description:
      "Explore the key events and figures that shaped our world throughout history. From ancient civilizations to modern times, this book offers a concise yet comprehensive overview of world history.",
    payment_method: "",
    status: "available",
    images: [
      {
        id: 2,
        name: "sample2",
        src: "https://placehold.jp/400x250.png",
      },
    ],
    categories: [
      {
        id: 2,
        name: "History",
      },
    ],
    created_user: "uid",
    created_at: "1678833149",
    updated_at: "1678833149",
  },
  {
    id: 3,
    stripe_price_id: "price_1N4x4gEjv771bjTXW65kuNYe",
    stripe_product_id: "price_1N4x4gEjv771bjTXW65kuNYe",
    name: "Introduction to Astrophysics",
    price: 3499,
    active: true,
    description:
      "Delve into the mysteries of the cosmos with this introductory guide to astrophysics. From the birth of stars to the expansion of the universe, this book covers the fundamental concepts of astrophysics in an accessible manner.",
    payment_method: "",
    status: "available",
    categories: [
      {
        id: 3,
        name: "Science",
      },
    ],
    images: [
      {
        id: 3,
        name: "sample3",
        src: "https://placehold.jp/400x250.png",
      },
    ],
    created_user: "uid",
    created_at: "1678833149",
    updated_at: "1678833149",
  },
  {
    id: 4,
    stripe_price_id: "price_1N4x2fEjv771bjTXiqY0QH5h",
    stripe_product_id: "price_1N4x2fEjv771bjTXiqY0QH5h",
    name: "Learning Python for Data Science",
    price: 3999,
    active: true,
    description:
      "Unlock the power of Python for data analysis and machine learning. This book provides hands-on examples and practical tips for leveraging Python in the field of data science.",
    payment_method: "",
    status: "available",
    images: [
      {
        id: 4,
        name: "sample4",
        src: "https://placehold.jp/400x250.png",
      },
    ],
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
    created_user: "uid",
    created_at: "1678833149",
    updated_at: "1678833149",
  },
  {
    id: 5,
    stripe_price_id: "price_1MUi0HEjv771bjTXHmDQ2BET",
    stripe_product_id: "price_1MUi0HEjv771bjTXHmDQ2BET",
    name: "Artificial Intelligence Ethics",
    price: 3299,
    active: true,
    description:
      "Explore the ethical considerations surrounding artificial intelligence. This book examines the impact of AI on society, privacy, and decision-making, providing insights for a responsible AI future.",
    payment_method: "",
    status: "completed",
    images: [
      {
        id: 5,
        name: "sample5",
        src: "https://placehold.jp/400x250.png",
      },
    ],
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
    created_user: "uid",
    created_at: "1678833149",
    updated_at: "1678833149",
  },
];
