/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/saved-property-card.css";

const SavedPropertyCard = ({ _id, propertyListing, onDeleteFavourite }) => {
  return (
    <div className="saved-property-card">
      <div className="houseIconContainer">
        <FontAwesomeIcon icon={faHouse} className="houseIcon" />
      </div>
      <div className="title">{propertyListing.title}</div>
      <div className="type-and- city">{`${propertyListing.type}-${propertyListing.city}`}</div>
      <div className="bathrooms">
        <FontAwesomeIcon
          icon={faBath}
          className="bathIcon"
          data-testid="bath-icon"
        />
        {propertyListing.bathrooms}
      </div>
      <div className="bedrooms">
        <FontAwesomeIcon
          icon={faBed}
          className="bedIcon"
          data-testid="bed-icon"
        />
        {propertyListing.bedrooms}
      </div>
      <div className="price">
        {" "}
        <FontAwesomeIcon
          icon={faSterlingSign}
          className="sterlingIcon"
          data-testid="sterling-icon"
        />
        {propertyListing.price}
      </div>
      <div className="email">
        {" "}
        <a href={`mailto:${propertyListing.email}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="envelopeIcon"
            data-testid="envelope-icon"
          />
        </a>
      </div>
      <button
        className="delete"
        type="button"
        onClick={() => {
          onDeleteFavourite(_id);
        }}
      >
        Remove favourite
      </button>
    </div>
  );
};

SavedPropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  propertyListing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteFavourite: PropTypes.func.isRequired,
};

export default SavedPropertyCard;
