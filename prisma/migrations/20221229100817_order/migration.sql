/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_user_id_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `userId` INTEGER NULL,
    MODIFY `qt` VARCHAR(191) NULL,
    MODIFY `total` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Profile_user_id_key` ON `Profile`(`user_id`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Profile`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
