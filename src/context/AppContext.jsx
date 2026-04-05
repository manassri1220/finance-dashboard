import { createContext, useState, useEffect, useContext } from "react";
import { transactions as initialData } from "../data/transactions.js";

 const AppContext = createContext();
 export { AppContext };

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("transactions");
  return saved ? JSON.parse(saved) : initialData;
});
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  return saved ? JSON.parse(saved) : false;
});
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      
       // ✅ Real categories list
      const categories = ["Food", "Shopping", "Salary", "Freelance", "Travel"];
         
      // convert into transactions format
      const formatted = data.slice(0, 6).map((item, index) => ({
        id: index + 1,
        date: `2026-04-0${index + 1}`,
        amount: Math.floor(Math.random() * 5000) + 500,
        category: categories[Math.floor(Math.random() * categories.length)],
        type: index % 2 === 0 ? "income" : "expense",
      }));

      setTransactions(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);


  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);