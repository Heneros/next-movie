/*
  Warnings:

  - You are about to drop the column `backdrop` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `backdropPublicId` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "backdrop",
DROP COLUMN "backdropPublicId",
ADD COLUMN     "backdropUrl" TEXT;
