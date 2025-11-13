/*
  Warnings:

  - A unique constraint covering the columns `[userId,year,month]` on the table `ProfileVisit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProfileVisit_userId_year_month_key" ON "public"."ProfileVisit"("userId", "year", "month");
