import React from "react";
import { Routes, Route } from "react-router-dom";

import TodoApp from "./pages/TodoApp/TodoAppPage/TodoApp.js";

import Tic from "./pages/TicTacToe/TicTacToePage/Tic-tac-toe.js";

import TodoAppCS from "./pages/TodoAppContextReducerPair/TodoAppPage/TodoApp.js";

import NavBar from "./pages/Shared/Navigation/NavBar.js";

import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/To-do-app" element={<TodoApp />} />
        <Route path="/Tic-tac-toe" element={<Tic />} />
        <Route path="/To-do-appCS" element={<TodoAppCS />} />
      </Routes>
    </>
  );
}
