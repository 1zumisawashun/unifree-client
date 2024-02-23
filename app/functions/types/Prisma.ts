import {
  Category as RowCategory,
  Image as RowImage,
  Match as RowMatch,
  Message as RowMessage,
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

export type Message = RowMessage & {
  user: RowUser;
};

export type Messages = {
  matchId: number;
  userId: number;
  messages: Message[];
};

export type Image = RowImage;
