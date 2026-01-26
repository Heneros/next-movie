-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "posterImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Collections_slug_key" ON "Collections"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionMovies_AB_unique" ON "_CollectionMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionMovies_B_index" ON "_CollectionMovies"("B");

-- AddForeignKey
ALTER TABLE "_CollectionMovies" ADD CONSTRAINT "_CollectionMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionMovies" ADD CONSTRAINT "_CollectionMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
