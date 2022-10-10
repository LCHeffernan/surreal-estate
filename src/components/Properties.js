import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    message: "",
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.message);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        setAlert({
          message: "Property Added",
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

  return (
    <div className="property-card-container">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
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
