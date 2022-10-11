import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <div className="side-bar">
      <div className="filter-city-title">Filter by city</div>
      <div className="city-link-container">
        <Link
          className="city-link"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
      </div>
      <div className="city-link-container">
        <Link
          className="city-link"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
      </div>
      <div className="city-link-container">
        <Link
          className="city-link"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
      </div>
      <div className="city-link-container">
        <Link
          className="city-link"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
      </div>
      <div className="sort-city-title">Sort By</div>
      <div className="sort-link-container">
        <Link className="sort-link" to={buildQueryString("sort", { price: 1 })}>
          Price Ascending
        </Link>
      </div>
      <div className="sort-link-container">
        <Link
          className="sort-link"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price Descending
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
