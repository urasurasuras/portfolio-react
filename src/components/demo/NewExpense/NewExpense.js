import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

import "./NewExpense.css";
import { Button } from "react-bootstrap";

const NewExpenseDialogue = (props) => {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      key: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  // Form display toggle
  const [expenseToggle, setExpenseToggle] = useState(false);
  const newExpenseClickHandler = () => {
    setExpenseToggle(!expenseToggle);
  };

  // Set content
  let displayContent = (
    <Button onClick={newExpenseClickHandler}>Add new expense</Button>
  );
  if (expenseToggle === true) {
    displayContent = (
      <ExpenseForm
        onSaveExpenseDataSubmit={saveExpenseDataHandler}
        onSaveExpenseFormCancel={newExpenseClickHandler}
      />
    );
  }

  // Return content
  return <Card className="new-expense">{displayContent}</Card>;
};

export default NewExpenseDialogue;
