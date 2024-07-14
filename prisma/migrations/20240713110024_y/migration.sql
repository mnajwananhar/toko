/*
  Warnings:

  - The primary key for the `Pengguna` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Penjualan" DROP CONSTRAINT "Penjualan_id_pengguna_fkey";

-- AlterTable
ALTER TABLE "Pengguna" DROP CONSTRAINT "Pengguna_pkey",
ALTER COLUMN "id_pengguna" DROP DEFAULT,
ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id_pengguna");
DROP SEQUENCE "Pengguna_id_pengguna_seq";

-- AlterTable
ALTER TABLE "Penjualan" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Penjualan" ADD CONSTRAINT "Penjualan_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;
