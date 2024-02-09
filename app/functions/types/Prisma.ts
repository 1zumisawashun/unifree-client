import {
  Category as RowCategory,
  Image as RowImage,
  Match as RowMatch,
  Product as RowProduct,
  User as RowUser,
} from "@prisma/client";

export type Product = RowProduct & {
  user: RowUser;
  images: RowImage[];
  categories: RowCategory[];
};

export type User = RowUser & {
  matches: RowMatch[];
  products: RowProduct[];
};
