import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
  ];

  return (
    <div>
      <h2>Let's start</h2>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
