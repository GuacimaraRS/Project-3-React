// AppBar.js
import React from "react";
import "./Header.css";
import logoImage from "../../assets/images/eyes_of_life.png";
import { Link } from "react-router-dom";
const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1>
        </Link>
        <img src={logoImage} alt="Logo" className="app-logo" />
        <div className="button-container">
          <Link to="/register">
            <button className="app-button">Registrate</button>
          </Link>
          <Link to="/sign-in">
            <button className="app-button">Iniciar Sesión</button>
          </Link>
          <Link to="/about-us">
            <button className="app-button">About us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
