/*
  Warnings:

  - You are about to drop the column `financeId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `finances` table. All the data in the column will be lost.
  - You are about to drop the column `financeId` on the `investments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `investments` table. All the data in the column will be lost.
  - You are about to drop the column `financeId` on the `transtions` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `transtions` table. All the data in the column will be lost.
  - Added the required column `finance_id` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `finances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finance_id` to the `investments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `investments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finance_id` to the `transtions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `transtions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_financeId_fkey";

-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_userId_fkey";

-- DropForeignKey
ALTER TABLE "finances" DROP CONSTRAINT "finances_userId_fkey";

-- DropForeignKey
ALTER TABLE "investments" DROP CONSTRAINT "investments_financeId_fkey";

-- DropForeignKey
ALTER TABLE "investments" DROP CONSTRAINT "investments_userId_fkey";

-- DropForeignKey
ALTER TABLE "transtions" DROP CONSTRAINT "transtions_financeId_fkey";

-- DropForeignKey
ALTER TABLE "transtions" DROP CONSTRAINT "transtions_userId_fkey";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "financeId",
DROP COLUMN "userId",
ADD COLUMN     "finance_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "finances" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "investments" DROP COLUMN "financeId",
DROP COLUMN "userId",
ADD COLUMN     "finance_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transtions" DROP COLUMN "financeId",
DROP COLUMN "userId",
ADD COLUMN     "finance_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "finances" ADD CONSTRAINT "finances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "finances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transtions" ADD CONSTRAINT "transtions_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "finances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transtions" ADD CONSTRAINT "transtions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "finances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
