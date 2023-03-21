import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2023, 4, 21),
    },
    { id: "e3", title: "Books", amount: 45, date: new Date(2022, 9, 16) },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: 345,
      date: new Date(2022, 4, 23),
    },
  ];

  const addExpenseData = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
