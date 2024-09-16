/*
  Warnings:

  - A unique constraint covering the columns `[placeId]` on the table `Destiny` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Destiny" ADD COLUMN     "placeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Destiny_placeId_key" ON "Destiny"("placeId");
