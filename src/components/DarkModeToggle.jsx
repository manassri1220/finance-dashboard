import { useAppContext } from "../context/AppContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useAppContext();

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="border px-3 py-1 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;