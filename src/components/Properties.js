/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
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
  console.log(search);

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
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

Properties.defaultProps = {
  title: "2 bed",
  type: "cottage",
  bathrooms: 1,
  bedrooms: 3,
  price: 50000,
  city: "Manchester",
  email: "test@codes.com",
};

export default Properties;
