import React, { useState } from "react";
import "../../style/NewExpense.css";
import Form from "./Form";

const NewExpense = ({ onAddExpense }) => {
  //for props (from Child to Parent !) we pass the pointer to this function in Form component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseDate);
    setClicked(false);
  };

  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(true);
  };

  const handleClose = () => {
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <Form
          onClose={handleClose}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={handleClicked}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
