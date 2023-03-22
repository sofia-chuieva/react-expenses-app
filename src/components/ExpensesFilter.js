import React from "react";

import "../style/ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter, selectedValue }) => {
  const dropDownChange = (e) => {
    //forward it to Expenses.js
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChange} value={selectedValue}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
