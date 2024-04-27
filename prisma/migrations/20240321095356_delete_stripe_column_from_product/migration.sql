/*
  Warnings:

  - You are about to drop the column `stripe_price_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_product_id` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "stripe_price_id",
DROP COLUMN "stripe_product_id";
