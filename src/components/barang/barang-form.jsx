"use client";

import { TambahBarang } from "../../lib/actions";
import { useFormState } from "react-dom";
import { Tambah } from "../buttons";

const BarangForm = () => {
  const [state, formAction] = useFormState(TambahBarang, null);
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">
      <form action={formAction}>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nama_barang" className="font-semibold">
              Nama Barang
            </label>
            <input
              type="text"
              name="nama_barang"
              id="nama_barang"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div id="error-nama" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.nama_barang}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="harga" className="font-semibold">
              Harga
            </label>
            <input
              type="number"
              name="harga"
              id="harga"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div id="error-sandi" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.error?.harga}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="stok" className="font-semibold">
              Stok
            </label>
            <input
              type="number"
              name="stok"
              id="stok"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div id="error-sandi" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.error?.stok}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="satuan" className="font-semibold">
              Satuan
            </label>
            <input
              type="text"
              name="satuan"
              id="satuan"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div id="error-sandi" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.satuan}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="jenis" className="font-semibold">
              Jenis
            </label>
            <select
              name="jenis"
              id="jenis"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Plastik">Plastik</option>
              <option value="Bahan_Kue">Bahan Kue</option>
              <option value="Sembako">Sembako</option>
            </select>
          </div>
        </div>
        <div id="error-messsage" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-green-500">{state?.message}</p>
        </div>
        <div className="flex justify-end">
          <Tambah label={"Tambah"} />
        </div>
      </form>
    </div>
  );
};

export default BarangForm;
