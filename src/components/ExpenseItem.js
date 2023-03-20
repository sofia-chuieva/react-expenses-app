import React from "react";
import "./ExpenseItem.css";
import ExprenseDate from "./ExprenseDate";

const ExpenseItem = ({ data }) => {
  // const month = data.date.toLocaleString("en-US", { month: "long" });
  // const day = data.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = data.date.getFullYear();
  return (
    <div className="expense-item">
      <ExprenseDate info={data.date} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
