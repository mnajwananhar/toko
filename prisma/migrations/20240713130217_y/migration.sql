/*
  Warnings:

  - The primary key for the `Barang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DetailPenjualan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `JenisBarang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Penjualan` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Barang" DROP CONSTRAINT "Barang_id_jenis_fkey";

-- DropForeignKey
ALTER TABLE "DetailPenjualan" DROP CONSTRAINT "DetailPenjualan_id_barang_fkey";

-- DropForeignKey
ALTER TABLE "DetailPenjualan" DROP CONSTRAINT "DetailPenjualan_id_penjualan_fkey";

-- AlterTable
ALTER TABLE "Barang" DROP CONSTRAINT "Barang_pkey",
ALTER COLUMN "id_barang" DROP DEFAULT,
ALTER COLUMN "id_barang" SET DATA TYPE TEXT,
ALTER COLUMN "id_jenis" SET DATA TYPE TEXT,
ADD CONSTRAINT "Barang_pkey" PRIMARY KEY ("id_barang");
DROP SEQUENCE "Barang_id_barang_seq";

-- AlterTable
ALTER TABLE "DetailPenjualan" DROP CONSTRAINT "DetailPenjualan_pkey",
ALTER COLUMN "id_detail" DROP DEFAULT,
ALTER COLUMN "id_detail" SET DATA TYPE TEXT,
ALTER COLUMN "id_barang" SET DATA TYPE TEXT,
ALTER COLUMN "id_penjualan" SET DATA TYPE TEXT,
ADD CONSTRAINT "DetailPenjualan_pkey" PRIMARY KEY ("id_detail");
DROP SEQUENCE "DetailPenjualan_id_detail_seq";

-- AlterTable
ALTER TABLE "JenisBarang" DROP CONSTRAINT "JenisBarang_pkey",
ALTER COLUMN "id_jenis" DROP DEFAULT,
ALTER COLUMN "id_jenis" SET DATA TYPE TEXT,
ADD CONSTRAINT "JenisBarang_pkey" PRIMARY KEY ("id_jenis");
DROP SEQUENCE "JenisBarang_id_jenis_seq";

-- AlterTable
ALTER TABLE "Penjualan" DROP CONSTRAINT "Penjualan_pkey",
ALTER COLUMN "id_penjualan" DROP DEFAULT,
ALTER COLUMN "id_penjualan" SET DATA TYPE TEXT,
ADD CONSTRAINT "Penjualan_pkey" PRIMARY KEY ("id_penjualan");
DROP SEQUENCE "Penjualan_id_penjualan_seq";

-- AddForeignKey
ALTER TABLE "Barang" ADD CONSTRAINT "Barang_id_jenis_fkey" FOREIGN KEY ("id_jenis") REFERENCES "JenisBarang"("id_jenis") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "Barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_id_penjualan_fkey" FOREIGN KEY ("id_penjualan") REFERENCES "Penjualan"("id_penjualan") ON DELETE RESTRICT ON UPDATE CASCADE;
