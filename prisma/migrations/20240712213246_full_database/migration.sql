/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Peran" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "MetodePembayaran" AS ENUM ('QRIS', 'Tunai');

-- DropTable
DROP TABLE "Contact";

-- CreateTable
CREATE TABLE "Pengguna" (
    "id_pengguna" SERIAL NOT NULL,
    "nama_pengguna" TEXT NOT NULL,
    "kata_sandi" TEXT NOT NULL,
    "peran" "Peran" NOT NULL,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id_pengguna")
);

-- CreateTable
CREATE TABLE "JenisBarang" (
    "id_jenis" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,

    CONSTRAINT "JenisBarang_pkey" PRIMARY KEY ("id_jenis")
);

-- CreateTable
CREATE TABLE "Barang" (
    "id_barang" SERIAL NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "stok" INTEGER NOT NULL,
    "satuan" TEXT NOT NULL,
    "id_jenis" INTEGER NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id_barang")
);

-- CreateTable
CREATE TABLE "Penjualan" (
    "id_penjualan" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_harga" DOUBLE PRECISION NOT NULL,
    "metode_pembayaran" "MetodePembayaran" NOT NULL,
    "id_pengguna" INTEGER NOT NULL,

    CONSTRAINT "Penjualan_pkey" PRIMARY KEY ("id_penjualan")
);

-- CreateTable
CREATE TABLE "DetailPenjualan" (
    "id_detail" SERIAL NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "kuantitas" INTEGER NOT NULL,
    "id_barang" INTEGER NOT NULL,
    "id_penjualan" INTEGER NOT NULL,

    CONSTRAINT "DetailPenjualan_pkey" PRIMARY KEY ("id_detail")
);

-- AddForeignKey
ALTER TABLE "Barang" ADD CONSTRAINT "Barang_id_jenis_fkey" FOREIGN KEY ("id_jenis") REFERENCES "JenisBarang"("id_jenis") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjualan" ADD CONSTRAINT "Penjualan_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "Barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_id_penjualan_fkey" FOREIGN KEY ("id_penjualan") REFERENCES "Penjualan"("id_penjualan") ON DELETE RESTRICT ON UPDATE CASCADE;
