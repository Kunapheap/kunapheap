/*
  Warnings:

  - A unique constraint covering the columns `[color_name]` on the table `Color` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Color_color_name_key" ON "Color"("color_name");
