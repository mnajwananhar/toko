import EditJenisForm from "../../../../components/jenis/editjenis-form";
import { getJenisId } from "../../../../lib/data";
import JenisTable from "../../../../components/jenis/jenis-table";

const EditJenisBarang = async ({ params }) => {
  const id = params.id;
  const jenis = await getJenisId(id);
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
        <JenisTable className="flex-1" />
        <EditJenisForm className="w-96" jenis={jenis} />
      </div>
    </div>
  );
};

export default EditJenisBarang;
