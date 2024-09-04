/*
  Warnings:

  - You are about to drop the column `creatorId` on the `TripGroup` table. All the data in the column will be lost.
  - You are about to drop the `_TripGroupToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TripGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_destinationId_fkey";

-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_tripId_fkey";

-- DropForeignKey
ALTER TABLE "_TripGroupToUser" DROP CONSTRAINT "_TripGroupToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TripGroupToUser" DROP CONSTRAINT "_TripGroupToUser_B_fkey";

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TripGroup" DROP COLUMN "creatorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_TripGroupToUser";

-- CreateTable
CREATE TABLE "_ActivityToTrip" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActivityToDestination" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GroupMembers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityToTrip_AB_unique" ON "_ActivityToTrip"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityToTrip_B_index" ON "_ActivityToTrip"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityToDestination_AB_unique" ON "_ActivityToDestination"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityToDestination_B_index" ON "_ActivityToDestination"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupMembers_AB_unique" ON "_GroupMembers"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupMembers_B_index" ON "_GroupMembers"("B");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripGroup" ADD CONSTRAINT "TripGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToTrip" ADD CONSTRAINT "_ActivityToTrip_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToTrip" ADD CONSTRAINT "_ActivityToTrip_B_fkey" FOREIGN KEY ("B") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDestination" ADD CONSTRAINT "_ActivityToDestination_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDestination" ADD CONSTRAINT "_ActivityToDestination_B_fkey" FOREIGN KEY ("B") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupMembers" ADD CONSTRAINT "_GroupMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "TripGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupMembers" ADD CONSTRAINT "_GroupMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
