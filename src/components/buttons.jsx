"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { DeleteBarang, DeleteJenis, DeletePengguna } from "../lib/actions";

export const Tambah = ({ label }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
    { "opacity cursor-progress": pending }
  );
  return (
    <button type="submit" className={className} disabled={pending}>
      {label == "Tambah" ? (
        <span>{pending ? "..." : "Tambah"}</span>
      ) : (
        <span>{pending ? "..." : "Update"}</span>
      )}
    </button>
  );
};

export const EditButton = ({ id }) => {
  return (
    <Link
      href={`/pengguna/edit/${id}`}
      className="mr-2 py-1 px-3 bg-blue-500 text-white rounded"
    >
      Edit
    </Link>
  );
};
export const EditButtonJenis = ({ id }) => {
  return (
    <Link
      href={`/jenis/edit/${id}`}
      className="mr-2 py-1 px-3 bg-blue-500 text-white rounded"
    >
      Edit
    </Link>
  );
};
export const EditButtonBarang = ({ id }) => {
  return (
    <Link
      href={`/barang/edit/${id}`}
      className="mr-2 py-1 px-3 bg-blue-500 text-white rounded"
    >
      Edit
    </Link>
  );
};
export const DeleteButton = ({ id }) => {
  const DeletePenggunaId = DeletePengguna.bind(null, id);
  return (
    <form action={DeletePenggunaId}>
      <button className="py-1 px-3 bg-red-500 text-white rounded">
        Delete
      </button>
    </form>
  );
};
export const DeleteButtonJenis = ({ id }) => {
  const DeleteJenisId = DeleteJenis.bind(null, id);
  return (
    <form action={DeleteJenisId}>
      <button className="py-1 px-3 bg-red-500 text-white rounded">
        Delete
      </button>
    </form>
  );
};
export const DeleteButtonBarang = ({ id }) => {
  const DeleteBarangId = DeleteBarang.bind(null, id);
  return (
    <form action={DeleteBarangId}>
      <button className="py-1 px-3 bg-red-500 text-white rounded">
        Delete
      </button>
    </form>
  );
};
