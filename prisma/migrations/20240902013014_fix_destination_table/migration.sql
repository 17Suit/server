/*
  Warnings:

  - You are about to drop the column `postalCode` on the `Destination` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "postalCode",
ADD COLUMN     "country" TEXT,
ADD COLUMN     "countryCode" TEXT;
