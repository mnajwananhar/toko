"use client";

import { UpdateJenis } from "../../lib/actions";
import { useFormState } from "react-dom";
import { Tambah } from "../buttons";

const EditJenisForm = ({ jenis }) => {
  const updateJenisBarangId = UpdateJenis.bind(null, jenis.id_jenis);
  const [state, formAction] = useFormState(updateJenisBarangId, null);
  return (
    <form action={formAction}>
      <div className="">
        <div className="flex flex-col gap-4 mb-4 p-4 bg-white border border-gray-200 rounded-md shadow-md">
          <div className="flex flex-col gap-1">
            <label htmlFor="jenis" className="font-semibold">
              Jenis Barang
            </label>
            <input
              type="text"
              name="jenis"
              id="jenis"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={jenis?.jenis}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Tambah label={"Update"} />
        </div>
      </div>
    </form>
  );
};

export default EditJenisForm;
