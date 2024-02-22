import { useContext } from "react";
import { Context4, Context5 } from "./Context.js";
//import "../index.css"
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";
import React from "react"

export default function TodoItemDetails() {
  let showitem = useContext(Context4);
  let hide = useContext(Context5);

  return (
    <>
      <fieldset className="General">
        <legend className="General"> Details</legend>
        <RenderItemDetails showitem={showitem} hide={hide} />
      </fieldset>
    </>
  );
}

function RenderItemDetails({ showitem, hide }) {
  if (showitem !== null) {
    return (
      <div className="RenderItemDetails">
        <ul>
          <li>
            Item&apos;s ID:<p style={{ color: "Maroon" }}>{showitem.id}</p>
          </li>
          <li>
            Item&apos;s title:<p style={{ color: "Maroon" }}>{showitem.name}</p>
          </li>
          <li>
            {" "}
            Item&apos;s description:
            <p style={{ color: "Maroon" }}>{showitem.description}</p>
          </li>
        </ul>
        <button className="Hide" type="submit" onClick={hide}>
          {" "}
          Hide{" "}
        </button>
      </div>
    );
  }
}
