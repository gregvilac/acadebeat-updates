/*
  Warnings:

  - You are about to alter the column `targetQuoteMarks` on the `Language` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Language` MODIFY `targetQuoteMarks` JSON NULL;
