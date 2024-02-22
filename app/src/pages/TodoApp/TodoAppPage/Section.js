import {
  Context,
  Context1,
  Context2,
  Context3,
  Context4,
  Context5,
} from "./Context.js";

import React from "react"



export default function Section({
  add,
  items,
  show,
  del,
  showitem,
  hide,
  children,
}) {
  return (
    <section>
      <Context.Provider value={add}>
        <Context1.Provider value={items}>
          <Context2.Provider value={del}>
            <Context3.Provider value={show}>
              <Context4.Provider value={showitem}>
                <Context5.Provider value={hide}>{children}</Context5.Provider>
              </Context4.Provider>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </section>
  );
}
