// AppBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../assets/images/eyes_of_life.png";

const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1>
        </Link>
        <img src={logoImage} alt="Logo de Eyes of Life" className="app-logo" />
        <div className="button-container">
          <Link to="/register">
            <button className="app-button">Sign Up</button>
          </Link>
          <Link to="/sign-in">
            <button className="app-button">Sign In</button>
          </Link>
          <Link to="/about-us">
            <button className="app-button">About Us</button>
          </Link>
          <Link to="/">
            <button className="app-button">Home</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
