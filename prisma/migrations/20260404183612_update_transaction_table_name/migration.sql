/*
  Warnings:

  - You are about to drop the column `finance_id` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `finance_id` on the `investments` table. All the data in the column will be lost.
  - You are about to drop the column `finance_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `finances` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_finance_id_fkey";

-- DropForeignKey
ALTER TABLE "finances" DROP CONSTRAINT "finances_user_id_fkey";

-- DropForeignKey
ALTER TABLE "investments" DROP CONSTRAINT "investments_finance_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_finance_id_fkey";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "finance_id";

-- AlterTable
ALTER TABLE "investments" DROP COLUMN "finance_id";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "finance_id";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "salary" INTEGER;

-- DropTable
DROP TABLE "finances";
