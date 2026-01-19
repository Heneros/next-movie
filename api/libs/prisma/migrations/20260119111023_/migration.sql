-- CreateTable
CREATE TABLE "_TvDirectors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TvDirectors_AB_unique" ON "_TvDirectors"("A", "B");

-- CreateIndex
CREATE INDEX "_TvDirectors_B_index" ON "_TvDirectors"("B");

-- AddForeignKey
ALTER TABLE "_TvDirectors" ADD CONSTRAINT "_TvDirectors_A_fkey" FOREIGN KEY ("A") REFERENCES "Director"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TvDirectors" ADD CONSTRAINT "_TvDirectors_B_fkey" FOREIGN KEY ("B") REFERENCES "TvShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
