import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions, role, darkMode } = useAppContext();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filterType, setFilterType] = useState("");

  // FILTER + SORT
  const filteredData = transactions
    .filter((t) =>
      t.category?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filterType ? t.type === filterType : true
    )
    .sort((a, b) => {
      if (sort === "high") return b.amount - a.amount;
      if (sort === "low") return a.amount - b.amount;
      return 0;
    });

  //  CSV EXPORT
  const exportCSV = () => {
    const headers = ["Date", "Amount", "Category", "Type"];

    const rows = filteredData.map((t) => [
      t.date,
      t.amount,
      t.category,
      t.type,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gray-800 text-white p-6 rounded-xl shadow-md mt-6"
          : "bg-white text-black p-6 rounded-xl shadow-md mt-6"
      }
    >
      <h2 className="text-lg font-bold mb-4">Transactions</h2>

      {/*  SEARCH + FILTER + SORT */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={
            darkMode
              ? "border border-gray-600 bg-gray-700 text-white px-3 py-2 rounded w-full"
              : "border px-3 py-2 rounded w-full"
          }
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={
            darkMode
              ? "border border-gray-600 bg-gray-700 text-white px-3 py-2 rounded"
              : "border px-3 py-2 rounded"
          }
        >
          <option value="">Sort</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>

        {/*  FILTER TYPE */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className={
            darkMode
              ? "border border-gray-600 bg-gray-700 text-white px-3 py-2 rounded"
              : "border px-3 py-2 rounded"
          }
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/*  EXPORT BUTTON */}
      <button
        onClick={exportCSV}
        className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition duration-300 text-white px-3 py-2 rounded mb-3"
      >
        Export CSV
      </button>

      {/*  ADMIN BUTTON */}
      {role === "admin" && (
        <button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition duration-300 text-white px-4 py-2 mb-4 rounded ml-3">
          + Add Transaction
        </button>
      )}

      {/*  TABLE */}
      <table className="w-full text-left">
        <thead>
          <tr
            className={
              darkMode
                ? "border-b text-gray-300"
                : "border-b text-gray-500"
            }
          >
            <th className="py-2">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((t) => (
            <tr
              key={t.id}
              className={
                darkMode
                  ? "border-b hover:bg-gray-700 transition duration-200 ease-in-out"
                  : "border-b hover:bg-gray-100 transition duration-200 ease-in-out"
              }
            >
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>

              <td
                className={
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {t.type}
              </td>

              <td>
                {role === "admin" && (
                  <button className="bg-yellow-500 hover:bg-yellow-600 transform hover:scale-105 transition duration-300 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p
          className={
            darkMode
              ? "text-gray-400 mt-2"
              : "text-gray-500 mt-2"
          }
        >
          No transactions found
        </p>
      )}
    </div>
  );
};

export default TransactionTable;