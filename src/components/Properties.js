/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);
  // { propertyId: "", isSaved: true },
  // ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        // axios.get("http://localhost:3000/api/v1/Favourite").then((response) => {
        //   const ids = response.data.propertyListing;
        //   const isSaveds = ids.map(() => true);
        //   setIsFavourites();
        // });
        setAlert({
          message: "",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  // destructure search for useLocation hook - browser history
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="properties-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="property-card-container">
        <Alert
          className="alert"
          message={alert.message}
          success={alert.isSuccess}
        />
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} userID={userID} />
          </div>
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
