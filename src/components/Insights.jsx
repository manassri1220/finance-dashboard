import { useAppContext } from "../context/AppContext";
const Insights = () => {
  const { transactions } = useAppContext();

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalByCategory = {};
  expenses.forEach((t) => {
    totalByCategory[t.category] =
      (totalByCategory[t.category] || 0) + t.amount;
  });

const highestCategory =
  Object.keys(totalByCategory).length > 0
    ? Object.keys(totalByCategory).reduce((a, b) =>
        totalByCategory[a] > totalByCategory[b] ? a : b
         )
    : null;
  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
<h2 className="font-bold text-lg mb-2 text-black dark:text-white">Insights</h2>    
<p className="text-black dark:text-white">
  Highest Spending Category: {highestCategory}
</p>
    </div>
  );
};

export default Insights;