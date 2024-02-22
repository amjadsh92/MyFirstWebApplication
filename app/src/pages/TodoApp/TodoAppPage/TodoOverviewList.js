import { useContext } from "react";
import { Context1, Context2, Context3 } from "./Context.js";
//import "../index.css"
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";
import React from "react";

export default function TodoOverviewList() {
  let items = useContext(Context1);
  let del = useContext(Context2);
  let show = useContext(Context3);

  return (
    <>
      <fieldset className="General">
        <legend className="General"> To-do-items</legend>
        {items.map((it) => (
          <RenderOverviewList item={it} toDelete={del} toShow={show} key={it.id} />
        ))}
      </fieldset>
    </>
  );
}

function RenderOverviewList({ item, toDelete, toShow }) {
  return (
    <>
      <div key={item.id} className="RenderOverviewList">
        <p className="todoAppTask"> Task: {item.name} </p>
        <button
          className="General"
          type="submit"
          onClick={() => toDelete(item.id)}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          className="General"
          type="submit"
          onClick={() => toShow(item.id)}
        >
          {" "}
          Show{" "}
        </button>
      </div>
    </>
  );
}
