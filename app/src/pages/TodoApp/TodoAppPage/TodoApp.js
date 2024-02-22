import { useState } from "react";
import Section from "./Section.js";
import TodoItem from "./TodoItem.js";
import TodoOverviewList from "./TodoOverviewList.js";
import TodoItemDetails from "./TodoItemDetails.js";
import React from 'react'
//import "../index.css";
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";

//The code has six components:TodoApp, InputFieldset, OutputFieldset, ShowFieldset, renderOverviewListFieldset, OutputFieldset.
// TodoApp is the parent component, it has three children: InputFieldset, OutputFieldset, ShowFieldset.

// InputFieldset "produces the tasks", the task should have an ID, title, and a description.

// OutputFieldset "outputs the name of the tasks and is also responsible for deleting one or more of them
// and for giving access to show the details of a certain task when requested to"

// renderOverviewList is a child component of OutputFieldset and is responsible for executing or rendering the
// responsibilities of OutputFieldset for a certain task that is passed to it from its parent OutpuFieldset(
// So to make an analogy the OutputField set is like a manager that gives renderOverviewList(an employee) a certain task
// and asks it to show the title of the task and let him know if somebody requested to show or delete the task)

// ShowFieldset once it receives a certain task, it is responsible for showing the details of this task and also
// for hiding them once it should be.

// renderItemDetails is a child component of Showfieldset. It renders "showing the details" only when its parent ShowFieldset
// grants it the permission to do so.

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [itemToShow, setItemToShow] = useState(null);

  function addItem(itemtoadd) {
    setItems([...items, itemtoadd]);
  }

  function removeItem(idOfElementToRemove) {
    if (itemToShow !== null) {
      if (idOfElementToRemove === itemToShow.id) {
        setItemToShow(null);
      }
    }

    setItems(items.filter((i) => i.id !== idOfElementToRemove));
  }

  function showItem(idToShow) {
    items.map((i) => {
      if (i.id === idToShow) {
        return setItemToShow(i);
      }
    });
  }

  function hideItem() {
    setItemToShow(null);
  }

  return (
    <div className="General">
      <Section
        add={addItem}
        items={items}
        del={removeItem}
        show={showItem}
        showitem={itemToShow}
        hide={hideItem}
      >
        <h2>Welcome to my To-do-list application!</h2>
        <TodoItem />
        <TodoOverviewList />
        <TodoItemDetails />
      </Section>
    </div>
  );
}
