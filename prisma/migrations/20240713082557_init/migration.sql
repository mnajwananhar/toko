/*
  Warnings:

  - The values [user,admin] on the enum `Peran` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Peran_new" AS ENUM ('karyawan', 'manajer');
ALTER TABLE "Pengguna" ALTER COLUMN "peran" TYPE "Peran_new" USING ("peran"::text::"Peran_new");
ALTER TYPE "Peran" RENAME TO "Peran_old";
ALTER TYPE "Peran_new" RENAME TO "Peran";
DROP TYPE "Peran_old";
COMMIT;
