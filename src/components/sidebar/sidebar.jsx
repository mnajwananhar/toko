"use client";

import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isDataMasterOpen, setIsDataMasterOpen] = useState(false);

  return (
    <div className="h-screen w-64 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
      <div>
        <div className="bg-gray-900 text-white py-4 px-6 text-xl font-bold">
          Brand Name /<div></div>
        </div>
        <div>
          <nav className="mt-14">
            <ul>
              <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                Transaksi
              </li>

              <li
                className="flex justify-between items-center px-6 py-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsDataMasterOpen(!isDataMasterOpen)}
              >
                Data Master
                <span className="text-lg">{isDataMasterOpen ? "-" : "+"}</span>
              </li>
              {isDataMasterOpen && (
                <ul className="pl-6">
                  <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    <Link href="/barang">Barang</Link>
                  </li>
                  <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    <Link href="/jenis">Jenis</Link>
                  </li>
                  <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    <Link href="/pengguna">Pengguna</Link>
                  </li>
                </ul>
              )}

              <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                Riwayat Transaksi
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-3 px-6 cursor-pointer hover:bg-gray-700">
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
