import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { Button } from "react-bootstrap";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function ClickEvent() {
    setTitle("Changed!");
    console.log("Clicked");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <Button onClick={ClickEvent}>Change</Button>
        </div>
      </Card>
    </li>
  );
}
