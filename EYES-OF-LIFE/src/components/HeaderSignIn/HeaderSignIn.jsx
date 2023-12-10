import React from "react";
import "./HeaderSignIn.css";
import logoImage from "../../assets/images/eyes_of_life.png";
import { Link } from "react-router-dom";
const HeaderSignIn = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1>
        </Link>

        <img src={logoImage} alt="Logo" className="app-logo" />
        <div className="button-container">
       

          <Link to="/">
            <button className="app-button">INICIO</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSignIn;
