import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SavedPropertyCard from "./SavedPropertyCard";
import "../styles/saved-properties.css";

const SavedProperties = ({ userID }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite?populate=propertyListing")
      .then((response) => {
        setFavourites(response.data);
      });
  }, []);

  const handleDeleteFavourite = (favID) => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${favID}`).then(() => {
      setFavourites(favourites.filter((item) => item._id !== favID));
    });
  };

  // if user not logged on want to block this route to them
  return (
    <div className="saved-container">
      <h2>Favourites</h2>
      <div className="saved-card-container">
        {userID ? (
          favourites.map((favourite) => (
            <div key={favourite._id} className="item">
              <SavedPropertyCard
                {...favourite}
                onDeleteFavourite={handleDeleteFavourite}
              />
            </div>
          ))
        ) : (
          <div> Please log in to view your favourites.</div>
        )}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
