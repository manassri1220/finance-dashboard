# 💰 Finance Dashboard (React + Chart.js)

A modern and responsive **Finance Dashboard** built using React, Chart.js, and Tailwind CSS.  
This project helps users track income, expenses, visualize financial data, and analyze spending patterns.

---

## 🚀 Features

### 📊 Dashboard Overview
- Total Balance, Income, and Expenses summary cards
- Line chart for balance trend over time
- Pie chart for category-wise spending breakdown

### 💸 Transactions Management
- Add and view transactions
- Fields: Date, Amount, Category, Type
- Filtering, sorting, and search functionality

### 👤 Role-Based UI (Frontend Simulation)
- Admin: Can add/edit transactions
- Viewer: Read-only access
- Role switching using dropdown/toggle

### 📈 Insights Section
- Highest spending category
- Monthly comparison
- Data-driven insights from transactions

### 🌙 Dark Mode
- Toggle between light and dark themes
- Fully responsive and readable UI

---

## 🛠️ Tech Stack

- React (Frontend)
- Context API (State Management)
- Tailwind CSS (UI Styling)
- Chart.js + react-chartjs-2 (Charts)

---

## 📂 Project Structure
   src/
├── components/
│ ├── AddTransaction.jsx
│ ├── Charts.jsx
│ ├── DarkModeToggle.jsx
│ ├── Insights.jsx
│ ├── Navbar.jsx
│ ├── SummaryCard.jsx
│ ├── TransactionTable.jsx
│
├── context/
│ └── AppContext.jsx
│
├── data/
│ └── transactions.js
│
├── App.css
└── App.jsx
├── index.css
└── main.jsx





---

## ⚙️ How to Run

```bash
npm install
npm run dev