import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../style/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((i) => (
          <ExpenseItem data={i} key={i.id} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
