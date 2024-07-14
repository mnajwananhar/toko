"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PenggunaSchema = z.object({
  nama_pengguna: z.string().min(3, "Nama pengguna minimal 3 karakter"),
  kata_sandi: z.string().min(6, "Kata sandi minimal 6 karakter"),
  peran: z.enum(["Manajer", "Karyawan"]),
});
const JenisSchema = z.object({
  jenis: z.string().min(3, "Jenis minimal 3 karakter"),
});

const BarangSchema = z.object({
  nama_barang: z.string().min(3, "Jenis minimal 3 karakter"),
  harga: z.coerce.number().gte(18, "Must be 18 and above"),
  stok: z.coerce.number().gte(18, "Must be 18 and above"),
  satuan: z.string().min(3, "Jenis minimal 3 karakter"),
  jenis: z.enum(["Plastik", "Bahan_Kue", "Sembako"]),
});

const PenjualanSchema = z.object({
  total_harga: z.number().min(0),
  metode_pembayaran: z.enum(["QRIS", "Tunai"]),
  detail_penjualans: z.array(
    z.object({
      harga: z.number().min(0),
      kuantitas: z.number().min(1, "Kuantitas harus lebih dari 0"),
      id_barang: z.string().uuid(),
    })
  ),
});
export const TambahPenjualan = async (formData) => {
  // Validate form data using Zod Schema
  const validatedFields = PenjualanSchema.parse(formData);

  try {
    await prisma.penjualan.create({
      data: {
        total_harga: validatedFields.total_harga,
        metode_pembayaran: validatedFields.metode_pembayaran,
        pengguna: { connect: { id_pengguna: "some_user_id" } }, // Sesuaikan dengan id_pengguna yang sesuai
        detail_penjualans: {
          create: validatedFields.detail_penjualans.map((item) => ({
            harga: item.harga,
            kuantitas: item.kuantitas,
            barang: { connect: { id_barang: item.id_barang } },
          })),
        },
      },
    });

    return { success: true, message: "Transaction created successfully" };
  } catch (error) {
    console.error("Failed to create transaction:", error);
    return { success: false, message: "Failed to create transaction" };
  }
};

export const TambahBarang = async (prevSate, formData) => {
  const validatedFields = BarangSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.barang.create({
      data: {
        nama_barang: validatedFields.data.nama_barang,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
        satuan: validatedFields.data.satuan,
        jenis: validatedFields.data.jenis,
      },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/barang");
  redirect("/barang");
};
export const TambahJenis = async (prevSate, formData) => {
  const validatedFields = JenisSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.jenisBarang.create({
      data: {
        jenis: validatedFields.data.jenis,
      },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/jenis");
  redirect("/jenis");
};
export const TambahPengguna = async (prevSate, formData) => {
  const validatedFields = PenggunaSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.pengguna.create({
      data: {
        nama_pengguna: validatedFields.data.nama_pengguna,
        kata_sandi: validatedFields.data.kata_sandi,
        peran: validatedFields.data.peran,
      },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/pengguna");
  redirect("/pengguna");
};
export const UpdateBarang = async (id, prevSate, formData) => {
  const validatedFields = BarangSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.barang.update({
      data: {
        nama_barang: validatedFields.data.nama_barang,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
        satuan: validatedFields.data.satuan,
        jenis: validatedFields.data.jenis,
      },
      where: { id_barang: id },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/barang");
  redirect("/barang");
};
export const UpdatePengguna = async (id, prevSate, formData) => {
  const validatedFields = PenggunaSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.pengguna.update({
      data: {
        nama_pengguna: validatedFields.data.nama_pengguna,
        kata_sandi: validatedFields.data.kata_sandi,
        peran: validatedFields.data.peran,
      },
      where: { id_pengguna: id },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/pengguna");
  redirect("/pengguna");
};

export const UpdateJenis = async (id, prevSate, formData) => {
  const validatedFields = JenisSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.jenisBarang.update({
      data: {
        jenis: validatedFields.data.jenis,
      },
      where: { id_jenis: id },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/jenis");
  redirect("/jenis");
};

export const DeletePengguna = async (id) => {
  try {
    await prisma.pengguna.delete({
      where: { id_pengguna: id },
    });
  } catch (error) {
    return { message: "Failed to delete pengguna" };
  }

  revalidatePath("/pengguna");
};
export const DeleteJenis = async (id) => {
  try {
    await prisma.jenisBarang.delete({
      where: { id_jenis: id },
    });
  } catch (error) {
    return { message: "Failed to delete pengguna" };
  }

  revalidatePath("/jenis");
};
export const DeleteBarang = async (id) => {
  try {
    await prisma.barang.delete({
      where: { id_barang: id },
    });
  } catch (error) {
    return { message: "Failed to delete pengguna" };
  }

  revalidatePath("/barang");
};
