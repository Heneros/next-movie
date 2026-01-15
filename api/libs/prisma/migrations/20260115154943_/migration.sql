/*
  Warnings:

  - You are about to drop the column `rating` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,movieId,tvShowId]` on the table `Favorites` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tvShowId` to the `Favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tvShowId` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Favorites_userId_movieId_key";

-- AlterTable
ALTER TABLE "Favorites" ADD COLUMN     "tvShowId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GalleryImage" ADD COLUMN     "tvShowId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "rating",
ADD COLUMN     "tags" TEXT[];

-- CreateTable
CREATE TABLE "TvShow" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "year" INTEGER,
    "category" TEXT[],
    "tags" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT false,
    "provider" TEXT,
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "backdropUrl" TEXT,
    "backdropPublicId" TEXT,
    "posterUrl" TEXT,
    "posterUrlId" TEXT,

    CONSTRAINT "TvShow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TvShow_slug_key" ON "TvShow"("slug");

-- CreateIndex
CREATE INDEX "Favorites_tvShowId_idx" ON "Favorites"("tvShowId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_userId_movieId_tvShowId_key" ON "Favorites"("userId", "movieId", "tvShowId");

-- CreateIndex
CREATE INDEX "GalleryImage_tvShowId_idx" ON "GalleryImage"("tvShowId");

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryImage" ADD CONSTRAINT "GalleryImage_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
