"use client";

import { useFormState } from "react-dom";
import { Tambah } from "../buttons";
import { UpdatePengguna } from "../../lib/actions";

const EditPenggunaForm = ({ pengguna }) => {
  const updatePenggunaId = UpdatePengguna.bind(null, pengguna.id_pengguna);
  const [state, formAction] = useFormState(updatePenggunaId, null);
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">
      <form action={formAction}>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nama_pengguna" className="font-semibold">
              Nama Pengguna
            </label>
            <input
              type="text"
              name="nama_pengguna"
              id="nama_pengguna"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={pengguna?.nama_pengguna}
            />
            <div id="error-nama" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.nama_pengguna}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="kata_sandi" className="font-semibold">
              Kata Sandi
            </label>
            <input
              type="password"
              name="kata_sandi"
              id="kata_sandi"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={pengguna?.kata_sandi}
            />
            <div id="error-sandi" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.kata_sandi}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="peran" className="font-semibold">
              Peran
            </label>
            <select
              name="peran"
              id="peran"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Manajer">Manajer</option>
              <option value="Karyawan">Karyawan</option>
            </select>
          </div>
        </div>
        <div id="error-messsage" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-green-500">{state?.message}</p>
        </div>
        <Tambah label={"Update"} />
      </form>
    </div>
  );
};

export default EditPenggunaForm;
