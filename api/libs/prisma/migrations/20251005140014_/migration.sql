/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Movie" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_movieId_key" ON "public"."Movie"("movieId");

-- AddForeignKey
ALTER TABLE "public"."Movie" ADD CONSTRAINT "Movie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
