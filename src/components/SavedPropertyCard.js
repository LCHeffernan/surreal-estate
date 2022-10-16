/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

const SavedPropertyCard = ({ _id, propertyListing, onDeleteFavourite }) => {
  return (
    <div>
      <div>{propertyListing.title}</div>
      <div>{propertyListing.type}</div>
      <div>{propertyListing.bathrooms}</div>
      <div>{propertyListing.bedrooms}</div>
      <div>{propertyListing.price}</div>
      <div>{propertyListing.city}</div>
      <div>{propertyListing.email}</div>
      <button
        type="button"
        onClick={() => {
          onDeleteFavourite(_id);
        }}
      >
        delete fav
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
