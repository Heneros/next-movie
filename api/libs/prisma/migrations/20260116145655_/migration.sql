/*
  Warnings:

  - You are about to drop the column `value` on the `Rating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,movieId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tvShowId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Rating_userId_key";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "value",
ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_movieId_key" ON "Rating"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_tvShowId_key" ON "Rating"("userId", "tvShowId");
