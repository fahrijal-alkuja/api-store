/*
  Warnings:

  - You are about to alter the column `description` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `description` BOOLEAN NULL;
