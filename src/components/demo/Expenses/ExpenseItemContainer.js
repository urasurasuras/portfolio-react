import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemContainer.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function ExpenseItemContainer(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const yearSelectHandler = (dateSelected) => {
    setFilteredYear(dateSelected);
  };

  // Filter
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let displayedExpenses = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    displayedExpenses = filteredExpenses;
  }

  return (
    <div>
      <Card className="expense-item-container">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelect={yearSelectHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
