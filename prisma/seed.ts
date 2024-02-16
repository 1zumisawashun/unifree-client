import { PrismaClient } from "@prisma/client";
import { categories, matches, products, users } from "./constants";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();
  await prisma.match.deleteMany();
  await prisma.message.deleteMany();

  // seeding
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  // NOTE:categoryが存在しないとproducts作成でconnectできないので先にcategoryを作成する
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  for (const match of matches) {
    await prisma.match.create({
      data: match,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
