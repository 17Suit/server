/*
  Warnings:

  - You are about to drop the column `countryId` on the `Destination` table. All the data in the column will be lost.
  - You are about to drop the column `stateId` on the `Destination` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "countryId",
DROP COLUMN "stateId";
