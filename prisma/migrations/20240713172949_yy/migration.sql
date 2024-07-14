/*
  Warnings:

  - You are about to drop the column `id_jenis` on the `Barang` table. All the data in the column will be lost.
  - You are about to drop the `JenisBarang` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Jenis" AS ENUM ('Plastik', 'Bahan_Kue', 'Sembako');

-- DropForeignKey
ALTER TABLE "Barang" DROP CONSTRAINT "Barang_id_jenis_fkey";

-- AlterTable
ALTER TABLE "Barang" DROP COLUMN "id_jenis",
ADD COLUMN     "jenis" "Jenis" NOT NULL DEFAULT 'Plastik';

-- DropTable
DROP TABLE "JenisBarang";
