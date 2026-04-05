import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { useAppContext } from "../context/AppContext";

ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler 
);

const Charts = () => {
  const { transactions, darkMode } = useAppContext();

  //  LINE CHART (Balance Trend)
  const lineData = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        label: "Balance",
        data: transactions.map((t) =>
          t.type === "income" ? Number(t.amount) : -Number(t.amount)
        ),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "white" : "black",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },
    },
  };

  //  PIE CHART (ALL CATEGORY BREAKDOWN - FIXED)
  const categoryData = {};

  transactions.forEach((t) => {
    const category = t.category.toLowerCase(); // normalize
    const amount = Number(t.amount);

    if (!categoryData[category]) {
      categoryData[category] = 0;
    }

    categoryData[category] += amount;
  });

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#ef4444",
          "#22c55e",
          "#3b82f6",
          "#facc15",
          "#a855f7",
          "#06b6d4",
          "#f97316",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "white" : "black",
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* LINE CHART */}
      <div className={darkMode ? "bg-gray-800 p-4 rounded-lg shadow" : "bg-white p-4 rounded-lg shadow"}>
        <h2 className="text-lg font-bold mb-4">
          Balance Trend
        </h2>
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* PIE CHART */}
      <div className={darkMode ? "bg-gray-800 p-4 rounded-lg shadow" : "bg-white p-4 rounded-lg shadow"}>
        <h2 className="text-lg font-bold mb-4">
          Spending Breakdown
        </h2>

        <div className="h-[300px]">
          <Pie data={pieData} options={{ ...pieOptions, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Charts;