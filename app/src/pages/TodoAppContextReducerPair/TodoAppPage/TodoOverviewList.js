import { useContext } from "react";
import React from "react"
import {
  Items,
  DispatchItems,
  UpdateShowElementId,
  ShowElementId,
} from "./Context.js";
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";
import "./TodoApp.js";

export default function TodoOverviewList() {
  const items = useContext(Items);

  return (
    <>
      <fieldset className="General">
        <legend className="General"> To-do-items</legend>
        {items.map((it) => (
          <RenderOverviewList item={it} key={it.id}/>
        ))}
      </fieldset>
    </>
  );
}

function RenderOverviewList({ item }) {
  const updateIdOfElementToShow = useContext(UpdateShowElementId);
  const idOfElementToShow = useContext(ShowElementId);
  const dispatchItems = useContext(DispatchItems);

  return (
    <>
      <div className="RenderOverviewList">
        <p className="todoAppTask"> Task: {item.name} </p>
        <button
          className="General"
          type="submit"
          onClick={() => {
            if (idOfElementToShow !== null) {
              if (idOfElementToShow === item.id) {
                updateIdOfElementToShow(null);
              }
            }
            dispatchItems({ type: "remove", removeid: item.id });
          }}
        >
          Delete
        </button>
        <button
          className="General"
          type="submit"
          onClick={() => updateIdOfElementToShow(item.id)}
        >
          Show
        </button>
      </div>
    </>
  );
}
