import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
  faHouse,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
}) => {
  const [savedIcon, setSavedIcon] = useState(emptyHeart);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite")
      .then((response) =>
        setSavedIcon(
          response.data.filter((item) => item.propertyListing === _id).length >
            0
            ? faHeart
            : emptyHeart
        )
      );
  }, []);

  const handleSaveProperty = (propertyId) => {
    axios.get("http://localhost:3000/api/v1/Favourite").then((response) => {
      const favouriteExists = response.data.filter(
        (item) => item.propertyListing === propertyId
      );
      if (favouriteExists.length === 0) {
        axios
          .post("http://localhost:3000/api/v1/Favourite", {
            propertyListing: propertyId,
            fbUserId: userID,
          })
          .then(() => {
            setSavedIcon(faHeart);
          });
      } else {
        axios.delete(
          `http://localhost:3000/api/v1/Favourite/${favouriteExists[0]._id}`
        );
        setSavedIcon(emptyHeart);
      }
    });
  };

  return (
    <div className="property-card">
      <div className="houseIconContainer">
        <FontAwesomeIcon icon={faHouse} className="houseIcon" />
      </div>
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
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="envelopeIcon"
            data-testid="envelope-icon"
          />
        </a>
      </div>
      {userID ? (
        <button
          className="save"
          type="button"
          onClick={() => {
            handleSaveProperty(_id);
          }}
        >
          <FontAwesomeIcon icon={savedIcon} />
        </button>
      ) : (
        <div>no save option</div>
      )}
    </div>
  );
};

// want some to be number types but when spread properties into PropertyCard in Properties its going in as sting
PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default PropertyCard;
