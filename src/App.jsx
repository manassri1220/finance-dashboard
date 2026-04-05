
import Navbar from "./components/Navbar";
import SummaryCard from "./components/SummaryCard";
import TransactionTable from "./components/TransactionTable";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import AddTransaction from "./components/AddTransaction";
import { useAppContext } from "./context/AppContext";

function App() {
  const { transactions, role, darkMode } = useAppContext();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div
      className={
        darkMode
          ? "p-6 space-y-4 bg-black text-white min-h-screen"
      : "p-6 space-y-4 bg-white text-black min-h-screen"
      }
    >
      <Navbar />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expense" amount={expense} />
      </div>

      <Charts />
      <Insights />
      {role === "admin" && <AddTransaction />}
      <TransactionTable />
      
    </div>
  );
}

export default App;