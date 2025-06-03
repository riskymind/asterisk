/*
  Warnings:

  - Added the required column `image` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "image" TEXT NOT NULL;
