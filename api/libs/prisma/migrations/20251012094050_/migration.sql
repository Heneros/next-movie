-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_avatarId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Avatar" ADD CONSTRAINT "Avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
