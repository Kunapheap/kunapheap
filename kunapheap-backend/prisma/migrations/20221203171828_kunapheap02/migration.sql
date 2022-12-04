/*
  Warnings:

  - The primary key for the `Cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cart_id` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the `CartOnItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `item_id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartOnItem" DROP CONSTRAINT "CartOnItem_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "CartOnItem" DROP CONSTRAINT "CartOnItem_item_id_fkey";

-- DropIndex
DROP INDEX "Cart_user_id_key";

-- AlterTable
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_pkey",
DROP COLUMN "cart_id",
ADD COLUMN     "item_id" TEXT NOT NULL,
ADD CONSTRAINT "Cart_pkey" PRIMARY KEY ("item_id", "user_id");

-- DropTable
DROP TABLE "CartOnItem";

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
