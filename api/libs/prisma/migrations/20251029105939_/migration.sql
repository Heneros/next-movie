-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "profileViews" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "public"."ProfileVisit" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "visitorId" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfileVisit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProfileVisit_userId_createdAt_idx" ON "public"."ProfileVisit"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ProfileVisit_visitorId_createdAt_idx" ON "public"."ProfileVisit"("visitorId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."ProfileVisit" ADD CONSTRAINT "ProfileVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
