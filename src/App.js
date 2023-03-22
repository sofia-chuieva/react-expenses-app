import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 95.6,
    date: new Date(2020, 5, 23),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 786.5,
    date: new Date(2021, 4, 21),
  },
  { id: "e3", title: "Books", amount: 45, date: new Date(2022, 9, 16) },
  {
    id: "e4",
    title: "Wooden Desk",
    amount: 345,
    date: new Date(2022, 4, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseData = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
