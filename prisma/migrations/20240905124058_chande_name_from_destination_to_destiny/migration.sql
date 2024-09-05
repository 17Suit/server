/*
  Warnings:

  - The values [DESTINATION] on the enum `TripPriority` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `destinationId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the `Destination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActivityToDestination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DestinationToTrip` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TripPriority_new" AS ENUM ('BUDGET', 'DESTINY', 'COMPANY', 'DATES', 'EXPERIENCE');
ALTER TABLE "Trip" ALTER COLUMN "priority" TYPE "TripPriority_new" USING ("priority"::text::"TripPriority_new");
ALTER TYPE "TripPriority" RENAME TO "TripPriority_old";
ALTER TYPE "TripPriority_new" RENAME TO "TripPriority";
DROP TYPE "TripPriority_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "_ActivityToDestination" DROP CONSTRAINT "_ActivityToDestination_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityToDestination" DROP CONSTRAINT "_ActivityToDestination_B_fkey";

-- DropForeignKey
ALTER TABLE "_DestinationToTrip" DROP CONSTRAINT "_DestinationToTrip_A_fkey";

-- DropForeignKey
ALTER TABLE "_DestinationToTrip" DROP CONSTRAINT "_DestinationToTrip_B_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "destinationId",
ADD COLUMN     "destinyId" TEXT;

-- DropTable
DROP TABLE "Destination";

-- DropTable
DROP TABLE "_ActivityToDestination";

-- DropTable
DROP TABLE "_DestinationToTrip";

-- CreateTable
CREATE TABLE "Destiny" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "address" VARCHAR(255),
    "city" VARCHAR(100),
    "state" VARCHAR(100),
    "country" VARCHAR(100),
    "countryCode" VARCHAR(10),
    "continent" VARCHAR(50),
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Destiny_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DestinyToTrip" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActivityToDestiny" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Destiny_city_state_country_idx" ON "Destiny"("city", "state", "country");

-- CreateIndex
CREATE UNIQUE INDEX "_DestinyToTrip_AB_unique" ON "_DestinyToTrip"("A", "B");

-- CreateIndex
CREATE INDEX "_DestinyToTrip_B_index" ON "_DestinyToTrip"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityToDestiny_AB_unique" ON "_ActivityToDestiny"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityToDestiny_B_index" ON "_ActivityToDestiny"("B");

-- AddForeignKey
ALTER TABLE "_DestinyToTrip" ADD CONSTRAINT "_DestinyToTrip_A_fkey" FOREIGN KEY ("A") REFERENCES "Destiny"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DestinyToTrip" ADD CONSTRAINT "_DestinyToTrip_B_fkey" FOREIGN KEY ("B") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDestiny" ADD CONSTRAINT "_ActivityToDestiny_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDestiny" ADD CONSTRAINT "_ActivityToDestiny_B_fkey" FOREIGN KEY ("B") REFERENCES "Destiny"("id") ON DELETE CASCADE ON UPDATE CASCADE;
