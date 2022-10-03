import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="/logo.png"
        alt="logo of purple castle with words 'surreal estate'"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
