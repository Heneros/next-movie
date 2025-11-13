/*
  Warnings:

  - You are about to drop the column `posterUrl` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[posterId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Movie" DROP COLUMN "posterUrl",
ADD COLUMN     "posterId" INTEGER;

-- CreateTable
CREATE TABLE "public"."Avatar" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "posterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_posterId_key" ON "public"."Avatar"("posterId");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_posterId_key" ON "public"."Movie"("posterId");

-- AddForeignKey
ALTER TABLE "public"."Movie" ADD CONSTRAINT "Movie_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "public"."Avatar"("posterId") ON DELETE SET NULL ON UPDATE CASCADE;
