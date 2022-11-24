/*
  Warnings:

  - Added the required column `user_firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_lastname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_firstname" TEXT NOT NULL,
ADD COLUMN     "user_lastname" TEXT NOT NULL;
