import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{ color: "red" }}>Abdur is the best!</div>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/watch-party" activeClassName="active">
              Watch Party
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
