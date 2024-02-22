import { useContext } from "react";
import { useState } from "react";
import React from "react";
import { DispatchItems } from "./Context.js";
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";

export default function TodoItem() {
  const dispatchItems = useContext(DispatchItems);
  const [val, setVal] = useState("");
  const [des, setDes] = useState("");

  const handleVal = (event) => {
    setVal(event.target.value);
  };

  const handleDescription = (event) => {
    setDes(event.target.value);
  };

  function handleClick() {
    let task = { id: crypto.randomUUID(), name: val, description: des };
    dispatchItems({
      type: "added",
      item: task,
    });
    setVal("");
    setDes("");
  }

  return (
    <>
      <fieldset className="General">
        <legend className="General">To-do</legend>
        <label className="General">
          Enter task:
          <br />
          <input type="text" value={val} onChange={handleVal} />
        </label>
        <button
          className="General"
          type="submit"
          value="Add"
          onClick={handleClick}
        >
          Add{" "}
        </button>
        <br />

        <label className="General" htmlFor="description">
          Enter description:
          <br />
          <textarea
            id="description"
            name="description"
            type="text"
            value={des}
            onChange={handleDescription}
            className="General"
          ></textarea>
        </label>
      </fieldset>
    </>
  );
}
