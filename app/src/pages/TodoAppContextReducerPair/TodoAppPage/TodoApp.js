import TodoItem from "./TodoItem.js";
import TodoOverviewList from "./TodoOverviewList.js";
import TodoItemDetails from "./TodoItemDetails.js";
import { HandleItems } from "./Context.js";
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";
import React from "react"

export default function TodoAppCS() {
  return (
    <div className="General">
      <HandleItems>
        <h2>Welcome to my To-do-list application!</h2>
        <TodoItem />
        <TodoOverviewList />
        <TodoItemDetails />
      </HandleItems>
    </div>
  );
}
