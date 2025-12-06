-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "directorId" INTEGER[];

-- CreateTable
CREATE TABLE "Director" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "birthDate" TIMESTAMP(3),

    CONSTRAINT "Director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieDirectors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MovieDirectors_AB_unique" ON "_MovieDirectors"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieDirectors_B_index" ON "_MovieDirectors"("B");

-- AddForeignKey
ALTER TABLE "_MovieDirectors" ADD CONSTRAINT "_MovieDirectors_A_fkey" FOREIGN KEY ("A") REFERENCES "Director"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieDirectors" ADD CONSTRAINT "_MovieDirectors_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
