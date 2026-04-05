import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { role, setRole, darkMode, setDarkMode } = useAppContext();

  return (
    <div
      className={
        darkMode
          ? "flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg"
          : "flex justify-between items-center bg-white text-black p-4 rounded-lg shadow"
      }
    >
      <h1 className="text-lg font-bold">Finance Dashboard</h1>

      <div className="flex gap-4 items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-600 hover:bg-gray-700 transition text-white px-3 py-1 rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={
            darkMode
              ? "bg-gray-700 text-white px-2 py-1 rounded"
              : "bg-gray-200 text-black px-2 py-1 rounded"
          }
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;