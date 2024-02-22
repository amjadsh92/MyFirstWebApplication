import { createContext } from "react";
import { useReducer, useState } from "react";
import React from "react"
export const Items = createContext(null);
export const DispatchItems = createContext(null);
export const ShowElementId = createContext(null);
export const UpdateShowElementId = createContext(null);

export function HandleItems({ children }) {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [showElementId, setShowElementId] = useState(null);

  function updateShowElementId(itemToShow) {
    setShowElementId(itemToShow);
  }

  return (
    <Items.Provider value={items}>
      <DispatchItems.Provider value={dispatch}>
        <ShowElementId.Provider value={showElementId}>
          <UpdateShowElementId.Provider value={updateShowElementId}>
            {children}
          </UpdateShowElementId.Provider>
        </ShowElementId.Provider>
      </DispatchItems.Provider>
    </Items.Provider>
  );
}

export function itemsReducer(items, action) {
  switch (action.type) {
    case "added": {
      return [...items, action.item];
    }

    case "remove": {
      return items.filter((i) => i.id !== action.removeid);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
