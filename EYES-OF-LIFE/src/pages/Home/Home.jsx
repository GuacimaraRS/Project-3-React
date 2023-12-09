import React from "react";

import "./Home.css";
import { Outlet } from "react-router-dom";
import logoImage from "../../assets/images/eyes_of_life.png";

export const Home = () => {
  return (
    <>
   
      <div className="home-container">
        <h1>Bienvenidos a</h1>
        <h1>EYES OF LIFE</h1>
        <img src={logoImage} alt="Logo" className="app-logo" />
        <p>Descubre cosas increíbles aquí.</p>
      </div>
     
    </>
  );
};

export default Home;








