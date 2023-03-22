import React from "react";
import "../../style/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((i) => (
        <ExpenseItem data={i} key={i.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
