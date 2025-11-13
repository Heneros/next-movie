-- DropForeignKey
ALTER TABLE "public"."Movie" DROP CONSTRAINT "Movie_posterId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Movie" ADD CONSTRAINT "Movie_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "public"."Avatar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
