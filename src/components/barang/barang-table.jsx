import { getBarang } from "../../lib/data";
import { DeleteButtonBarang, EditButtonBarang } from "../buttons";

const BarangTable = async ({ query, currentPage }) => {
  const barang = await getBarang(query, currentPage);
  return (
    <table className="w-full text-sm text-left text-gray-500  border border-spacing-0">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">No</th>
          <th className="px-6 py-3">Nama Barang</th>
          <th className="px-6 py-3">Harga</th>
          <th className="px-6 py-3">Stok</th>
          <th className="px-6 py-3">Satuan</th>
          <th className="px-6 py-3">Jenis</th>
          <th className="px-6 py-3">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {barang.map((item, index) => (
          <tr key={index.id} className="bg-white border-b">
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{item.nama_barang}</td>
            <td className="px-6 py-4">{item.harga}</td>
            <td className="px-6 py-4">{item.stok}</td>
            <td className="px-6 py-4">{item.satuan}</td>
            <td className="px-6 py-4">{item.jenis}</td>
            <td className="px-6 py-4 text-center">
              <EditButtonBarang id={item.id_barang} />
              <DeleteButtonBarang id={item.id_barang} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BarangTable;
