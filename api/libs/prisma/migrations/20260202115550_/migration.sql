/*
  Warnings:

  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[movieId,providerPaymentId,provider]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tvShowId,providerPaymentId,provider]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tvShowId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ChatUser" DROP CONSTRAINT "ChatUser_chatId_fkey";

-- DropForeignKey
ALTER TABLE "ChatUser" DROP CONSTRAINT "ChatUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_chatId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD COLUMN     "tvShowId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Chat";

-- DropTable
DROP TABLE "ChatUser";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Order";

-- CreateIndex
CREATE UNIQUE INDEX "Payment_movieId_providerPaymentId_provider_key" ON "Payment"("movieId", "providerPaymentId", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_tvShowId_providerPaymentId_provider_key" ON "Payment"("tvShowId", "providerPaymentId", "provider");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
