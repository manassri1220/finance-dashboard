import { useAppContext } from "../context/AppContext";

const SummaryCard = ({ title, amount }) => {
  const { darkMode } = useAppContext();

  return (
    <div
      className={
         darkMode
      ? "bg-gray-800 text-white shadow-lg p-5 rounded-2xl transform hover:scale-105 transition duration-300"
      : "bg-white text-black shadow-lg p-5 rounded-2xl transform hover:scale-105 transition duration-300"
  }
      
    >
      <h2 className={darkMode ? "text-gray-300 text-sm" : "text-gray-500 text-sm"}>
        {title}
      </h2>

      <p className="text-2xl font-bold mt-2">₹{amount}</p>
    </div>
  );
};

export default SummaryCard;