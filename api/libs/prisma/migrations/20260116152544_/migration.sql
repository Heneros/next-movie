/*
  Warnings:

  - You are about to drop the column `avgRating` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `value` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "avgRating",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "TvShow" ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0;
