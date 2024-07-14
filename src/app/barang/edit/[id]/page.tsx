import BarangTable from "../../../../components/barang/barang-table";
import { getBarangId } from "../../../../lib/data";
import EditBarangForm from "./../../../../components/barang/editbarang-form";

const EditBarang = async ({ params }) => {
  const id = params.id;
  const barang = await getBarangId(id);
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
        <BarangTable className="flex-1" />
        <EditBarangForm className="w-96" barang={barang} />
      </div>
    </div>
  );
};

export default EditBarang;
