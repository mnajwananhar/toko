import { prisma } from "../lib/prisma";
import JenisBarang from "./../app/jenis/page";

export const getPengguna = async () => {
  try {
    const pengguna = await prisma.pengguna.findMany();
    return pengguna;
  } catch (err) {
    throw new Error("Error fetching data: " + err.message);
  }
};

export const getBarang = async () => {
  try {
    const barang = await prisma.barang.findMany();
    return barang;
  } catch (err) {
    throw new Error("Error fetching data: " + err.message);
  }
};

export const getPenggunaId = async (id_pengguna) => {
  try {
    const pengguna = await prisma.pengguna.findUnique({
      where: { id_pengguna },
    });
    return pengguna;
  } catch (err) {
    throw new Error("Error fetching data: " + err.message);
  }
};
export const getBarangId = async (id_barang) => {
  try {
    const barang = await prisma.barang.findUnique({
      where: { id_barang },
    });
    return barang;
  } catch (err) {
    throw new Error("Error fetching data: " + err.message);
  }
};
