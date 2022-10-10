import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type-and-city">{`${type}-${city}`}</div>
      <div className="bathrooms">
        <FontAwesomeIcon
          icon={faBath}
          className="bathIcon"
          data-testid="bath-icon"
        />
        {bathrooms}
      </div>
      <div className="bedrooms">
        <FontAwesomeIcon
          icon={faBed}
          className="bedIcon"
          data-testid="bed-icon"
        />
        {bedrooms}
      </div>
      <div className="price">
        <FontAwesomeIcon
          icon={faSterlingSign}
          className="sterlingIcon"
          data-testid="sterling-icon"
        />
        {price}
      </div>
      <div className="email">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="envelopeIcon"
          data-testid="envelope-icon"
        />
        {email}
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
