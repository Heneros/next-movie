/*
  Warnings:

  - The `avatarId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId]` on the table `Avatar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[avatarId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Avatar" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "posterId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "avatarId",
ADD COLUMN     "avatarId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_userId_key" ON "public"."Avatar"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_avatarId_key" ON "public"."User"("avatarId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."Avatar"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
