import React from "react";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";

const Properties = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div>
      Properties Page
      <PropertyCard
        title={title}
        type={type}
        bathrooms={bathrooms}
        bedrooms={bedrooms}
        price={price}
        city={city}
        email={email}
      />
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

Properties.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
};

export default Properties;
