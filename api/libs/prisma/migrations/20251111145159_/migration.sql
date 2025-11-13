/*
  Warnings:

  - You are about to drop the column `posterId` on the `Avatar` table. All the data in the column will be lost.
  - You are about to drop the column `posterId` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieId]` on the table `Avatar` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Movie" DROP CONSTRAINT "Movie_posterId_fkey";

-- DropIndex
DROP INDEX "public"."Avatar_posterId_key";

-- DropIndex
DROP INDEX "public"."Movie_posterId_key";

-- AlterTable
ALTER TABLE "public"."Avatar" DROP COLUMN "posterId",
ADD COLUMN     "movieId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Movie" DROP COLUMN "posterId";

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_movieId_key" ON "public"."Avatar"("movieId");
