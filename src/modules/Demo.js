import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ExpenseItemContainer from "../components/demo/Expenses/ExpenseItemContainer";
import NewExpenseDialogue from "../components/demo/NewExpense/NewExpense";

import "../styles.css";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

// Dummy data
const yummyExpenses = [
  { key: "e1", title: "Joe", date: new Date(), amount: "5.56" },
  { key: "e4", title: "mama", date: new Date(), amount: "7.56" },
  { key: "e2", title: "hehe", date: new Date(), amount: "468253" },
  {
    key: "e3",
    title: "Baska bisey",
    date: new Date(),
    amount: "124231546",
  },
];

function Demo(props) {
  const dispatch = useDispatch();

  dispatch({ type: "clearNewBadge" });
  // const handleNewBadgeClear = () => {
  //   dispatch({ type: "clearNewBadge" });
  // };
  // const handleNewBadgeMake = () => {
  //   dispatch({ type: "makeNewBadge" });
  // };
  const [expenses, setExpenses] = useState(yummyExpenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((asdashjdksha) => {
      return [newExpense, ...asdashjdksha];
    });
  };

  return (
    <div className="App">
      <h1 className="text-center">Migros sanal market</h1>
      <NewExpenseDialogue onAddExpense={addExpenseHandler} />
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}

export default Demo;
