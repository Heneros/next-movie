/*
  Warnings:

  - You are about to drop the column `altText` on the `GalleryImage` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `GalleryImage` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "GalleryImage_movieId_order_idx";

-- AlterTable
ALTER TABLE "GalleryImage" DROP COLUMN "altText",
DROP COLUMN "order";

-- CreateIndex
CREATE INDEX "GalleryImage_movieId_idx" ON "GalleryImage"("movieId");
