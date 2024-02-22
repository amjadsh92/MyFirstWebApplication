import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import "../../Shared/Assets/shared.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="General">
        <li>
          <Link to="/To-do-app" className="link">
            To-do-app
          </Link>
        </li>
        <li>
          <Link to="/Tic-tac-toe" className="link">
            Tic-tac-toe
          </Link>
        </li>
        <li>
          <Link to="/To-do-appCS" className="link">
            To-do-appCS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
