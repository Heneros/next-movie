/*
  Warnings:

  - Added the required column `month` to the `ProfileVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProfileVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `ProfileVisit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ProfileVisit" DROP CONSTRAINT "ProfileVisit_userId_fkey";

-- AlterTable
ALTER TABLE "public"."ProfileVisit" ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "ProfileVisit_year_month_idx" ON "public"."ProfileVisit"("year", "month");

-- AddForeignKey
ALTER TABLE "public"."ProfileVisit" ADD CONSTRAINT "ProfileVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
