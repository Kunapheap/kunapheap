/*
  Warnings:

  - Added the required column `user_gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_gender" TEXT NOT NULL;
