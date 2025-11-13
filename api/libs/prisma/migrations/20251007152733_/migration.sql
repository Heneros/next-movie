/*
  Warnings:

  - You are about to drop the column `movieId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Movie" DROP CONSTRAINT "Movie_movieId_fkey";

-- DropIndex
DROP INDEX "public"."Movie_movieId_key";

-- AlterTable
ALTER TABLE "public"."Movie" DROP COLUMN "movieId";

-- AddForeignKey
ALTER TABLE "public"."Movie" ADD CONSTRAINT "Movie_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
