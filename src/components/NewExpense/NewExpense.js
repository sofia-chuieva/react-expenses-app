import React from "react";
import "./NewExpense.css";
import Form from "./Form";

const NewExpense = ({ onAddExpense }) => {
  //for props (from Child to Parent !) we pass the pointer to this function in Form component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
