import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import "../styles/navbar.css";

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="navbar">
      <img
        className="logo"
        data-testid="logo"
        src="/logo.png"
        alt="logo of purple castle with words 'surreal estate'"
      />
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-link">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
      <div className="login-button">
        {userID ? (
          <button type="submit" onClick={onLogout}>
            logout
          </button>
        ) : (
          <FacebookLogin appId="480325760801057" callback={onLogin} />
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

export default NavBar;
