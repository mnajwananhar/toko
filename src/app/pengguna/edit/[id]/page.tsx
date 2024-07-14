import EditPenggunaForm from "../../../../components/pengguna/editpengguna-form";
import { getPenggunaId } from "../../../../lib/data";
import PenggunaTable from "./../../../../components/pengguna/pengguna-table";
const EditPengguna = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const pengguna = await getPenggunaId(id);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center my-8">
        <input
          type="text"
          placeholder="Search Barang..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-row gap-10">
        <PenggunaTable className="flex-1" />
        <EditPenggunaForm className="w-96" pengguna={pengguna} />
      </div>
    </div>
  );
};

export default EditPengguna;
