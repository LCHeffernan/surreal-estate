import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="filter-city-title">Filter by city</div>
      <div className="city-link-container">
        <Link className="city-link" to={`/?query={"city": "Manchester"}`}>
          Manchester
        </Link>
      </div>
      <div className="city-link-container">
        <Link className="city-link" to={`/?query={"city": "Leeds"}`}>
          Leeds
        </Link>
      </div>
      <div className="city-link-container">
        <Link className="city-link" to={`/?query={"city": "Sheffield"}`}>
          Sheffield
        </Link>
      </div>
      <div className="city-link-container">
        <Link className="city-link" to={`/?query={"city": "Liverpool"}`}>
          Liverpool
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
