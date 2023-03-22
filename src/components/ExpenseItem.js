import React, { useState } from "react";
import "../style/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = ({ data }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate info={data.date} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
