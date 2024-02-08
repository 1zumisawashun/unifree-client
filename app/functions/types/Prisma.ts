import { Category as RowCategory, Image as RowImage, Product as RowProduct, User as RowUser } from "@prisma/client";

export type Product = RowProduct & {
  user: RowUser;
  images: RowImage[];
  categories: RowCategory[];
};

export type User = RowUser
