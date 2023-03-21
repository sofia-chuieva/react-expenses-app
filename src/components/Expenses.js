import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../style/Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div>
      <Card className="expenses">
        {expenses.map((i) => (
          <ExpenseItem data={i} key={i.id} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
