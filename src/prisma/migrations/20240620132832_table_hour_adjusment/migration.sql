/*
  Warnings:

  - You are about to drop the column `url` on the `hours` table. All the data in the column will be lost.
  - Added the required column `final_hour` to the `hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initial_hour` to the `hours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hours" DROP COLUMN "url",
ADD COLUMN     "final_hour" TIME NOT NULL,
ADD COLUMN     "initial_hour" TIME NOT NULL;
