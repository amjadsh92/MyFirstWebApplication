import { useContext } from "react";
import { Items, ShowElementId, UpdateShowElementId } from "./Context.js";
import "./TodoApp.css";
import "../../Shared/Assets/shared.css";
import React from "react";

export default function TodoItemDetails() {
  const items = useContext(Items);
  const idOfElementToShow = useContext(ShowElementId);

  let itemToShow;

  if (idOfElementToShow) {
    items.map((i) => {
      if (i.id === idOfElementToShow) {
        itemToShow = i;
      }
    });
  }

  return (
    <>
      <fieldset className="General">
        <legend className="General"> Details</legend>
        {!itemToShow ? () => {} : <RenderItemDetails itemToShow={itemToShow} />}
      </fieldset>
    </>
  );
}

function RenderItemDetails({ itemToShow }) {
  const updateIdOfElementToShow = useContext(UpdateShowElementId);

  return (
    <div className="RenderItemDetails">
      <ul>
        <li>
          Item&apos;s ID:<p style={{ color: "Maroon" }}>{itemToShow.id}</p>
        </li>
        <li>
          Item&apos;s title:<p style={{ color: "Maroon" }}>{itemToShow.name}</p>
        </li>
        <li>
          Item&apos;s description:
          <p style={{ color: "Maroon" }}>{itemToShow.description}</p>
        </li>
      </ul>
      <button
        className="Hide"
        type="submit"
        onClick={() => updateIdOfElementToShow(null)}
      >
        Hide
      </button>
    </div>
  );
}
