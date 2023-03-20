import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.map((i) => (
        <ExpenseItem data={i} key={i.id} />
      ))}
    </div>
  );
};

export default Expenses;
