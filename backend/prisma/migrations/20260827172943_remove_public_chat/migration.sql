/*
  Warnings:

  - You are about to drop the column `type` on the `conversations` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "conversations_type_idx";

-- AlterTable
ALTER TABLE "conversations" DROP COLUMN "type";

-- DropEnum
DROP TYPE "ConversationType";
