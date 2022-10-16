import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SavedPropertyCard from "./SavedPropertyCard";

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
    <div>
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
        <div> please log in</div>
      )}
    </div>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
