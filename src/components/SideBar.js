import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    // pushes new query string into brower's history and update address bar
    navigate(newQueryString);
  };
  return (
    <div className="side-bar">
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

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
