import { Category, Image, Product as RowProduct, User } from "@prisma/client";

export type Product = RowProduct & {
  user: User;
  images: Image[];
  categories: Category[];
};
