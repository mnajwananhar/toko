"use client";

import React, { useState } from "react";
import TransactionForm from "../../components/transaksi/transaction-form";
import TransactionTable from "../../components/transaksi/transaction-table";

const Transaki = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center my-8">
        <input
          type="text"
          placeholder="Search transactions..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-row gap-10">
        <TransactionTable
          className="flex-1"
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <TransactionForm className="w-96" selectedItems={selectedItems} />
      </div>
    </div>
  );
};

export default Transaki;
