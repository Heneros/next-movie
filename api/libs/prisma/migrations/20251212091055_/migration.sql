-- DropForeignKey
ALTER TABLE "Avatar" DROP CONSTRAINT "Avatar_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "provider" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "provider" SET DEFAULT 'email';

-- CreateTable
CREATE TABLE "Favorites" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Favorites_userId_idx" ON "Favorites"("userId");

-- CreateIndex
CREATE INDEX "Favorites_movieId_idx" ON "Favorites"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_userId_movieId_key" ON "Favorites"("userId", "movieId");

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
