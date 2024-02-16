import { Prisma } from "@prisma/client";

export const categories: Prisma.CategoryCreateInput[] = [
  { name: "Technology" }, //(テクノロジー)
  { name: "Fashion" }, //(ファッション)
  { name: "Food and Beverage" }, //(食品と飲料)
  { name: "Health and Wellness" }, //(健康とウェルネス)
  { name: "Sports" }, //(スポーツ)
  { name: "Entertainment" }, //(エンターテイメント)
  { name: "Travel" }, //(旅行)
  { name: "Education" }, //(教育)
  { name: "Automotive" }, //(自動車)
  { name: "Home and Garden" }, //(家庭とガーデニング)
];
