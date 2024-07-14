import { getPengguna } from "../../lib/data";
import { DeleteButton, EditButton } from "../buttons";

const PenggunaTable = async ({ query, currentPage }) => {
  const pengguna = await getPengguna(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Kata Sandi</th>
          <th className="py-3 px-6">Peran</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {pengguna.map((item, index) => (
          <tr key={index.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{item.nama_pengguna}</td>
            <td className="py-3 px-6">{item.kata_sandi}</td>
            <td className="py-3 px-6">{item.peran}</td>
            <td className="py-3 px-6 text-center">
              <div className="flex justify-center">
                <EditButton id={item.id_pengguna} />
                <DeleteButton id={item.id_pengguna} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PenggunaTable;
