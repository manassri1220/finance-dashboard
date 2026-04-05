import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddTransaction = () => {
  const { transactions, setTransactions } = useAppContext();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    //  Validation
    if (!form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
    };

    setTransactions([newTransaction, ...transactions]);

    // Reset form
    setForm({ amount: "", category: "", type: "expense" });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-2 text-black dark:text-white">Add Transaction</h2>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-gray-700 text-black dark:text-white"
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-gray-700 text-black dark:text-white"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;