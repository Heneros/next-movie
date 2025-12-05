/*
  Warnings:

  - You are about to drop the column `viewCount` on the `ProfileVisit` table. All the data in the column will be lost.
  - Added the required column `month` to the `ProfileVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `ProfileVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileVisit" DROP COLUMN "viewCount",
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "ProfileVisit_userId_year_month_idx" ON "ProfileVisit"("userId", "year", "month");
