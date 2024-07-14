"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { TambahPenjualan } from "../../lib/actions";

const TransactionForm = ({ selectedItems }) => {
  const [state, formAction] = useFormState(TambahPenjualan, null);
  const [paymentMethod, setPaymentMethod] = useState("tunai");
  const [diskon, setDiskon] = useState(0);
  const [tunai, setTunai] = useState(0);
  const totalHarga = 100000; // Contoh total harga

  const handleMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="w-96">
      <div className="flex flex-col gap-4 mt-5 p-4 bg-white border border-gray-200 rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Harga</p>
          <p className="font-semibold">Rp. 100.000</p>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="diskon" className="font-semibold">
            Diskon
          </label>
          <div className="flex items-center">
            <input
              type="number"
              name="diskon"
              id="diskon"
              className="w-[110px] p-2 border border-gray-300 rounded-md text-center"
              value={diskon}
              onChange={(e) => setDiskon(e.target.value)}
            />
            <p className="ml-2">%</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
          <label htmlFor="tunai" className="font-semibold">
            Tunai
          </label>
          <input
            type="number"
            name="tunai"
            id="tunai"
            className="w-32 p-2 border border-gray-300 rounded-md text-center"
            value={tunai}
            onChange={(e) => setTunai(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">Rp. 100.000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Kembali</p>
          <p className="font-semibold">Rp. 100.000</p>
        </div>
      </div>
      <form action={formAction}>
        <input type="hidden" name="totalHarga" value={totalHarga} />
        <input type="hidden" name="diskon" value={diskon} />
        <input type="hidden" name="tunai" value={tunai} />
        <input type="hidden" name="metodePembayaran" value={paymentMethod} />
        <input
          type="hidden"
          name="barang"
          value={JSON.stringify(selectedItems)}
        />
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className={`w-1/2 p-2 ${
                paymentMethod === "qris"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } rounded-md`}
              onClick={() => handleMethodChange("qris")}
            >
              QRIS
            </button>
            <button
              type="button"
              className={`w-1/2 p-2 ${
                paymentMethod === "tunai"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } rounded-md`}
              onClick={() => handleMethodChange("tunai")}
            >
              Tunai
            </button>
          </div>
          <div>
            <button
              className="w-full p-2 bg-indigo-500 text-white rounded-md"
              type="submit"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
