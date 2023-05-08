import React, { useState, useEffect } from "react";

import ExpenseItemContainer from "../components/demo/Expenses/ExpenseItemContainer";
import NewExpenseDialogue from "../components/demo/NewExpense/NewExpense";

import "../styles.css";

// Dummy data
const yummyExpenses = [
  { key: "e1", title: "Bread", date: new Date(), amount: "5.56" },
  { key: "e4", title: "Milk", date: new Date(), amount: "7.56" },
  { key: "e2", title: "Car", date: new Date(), amount: "6500" },
  {
    key: "e3",
    title: "House",
    date: new Date(),
    amount: "500000",
  },
];

function Demo(props) {

  const [expenses, setExpenses] = useState(yummyExpenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((asdashjdksha) => {
      return [newExpense, ...asdashjdksha];
    });
  };

  return (
    <div >
      <h1 className="text-center">Keep track of your expsenses</h1>
      <NewExpenseDialogue onAddExpense={addExpenseHandler} />
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}

export default Demo;
