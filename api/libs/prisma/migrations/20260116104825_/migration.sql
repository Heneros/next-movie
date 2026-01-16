/*
  Warnings:

  - You are about to drop the column `avgRating` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `avgRating` on the `TvShow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GalleryImage" ALTER COLUMN "movieId" DROP NOT NULL,
ALTER COLUMN "tvShowId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "avgRating";

-- AlterTable
ALTER TABLE "TvShow" DROP COLUMN "avgRating";

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER,
    "tvShowId" INTEGER,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_key" ON "Rating"("userId");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
