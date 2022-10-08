import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

// Alert.propTypes = {
//   message: PropTypes.string.isRequired,
//   success: PropTypes.bool.isRequired,
// };

export default Alert;
