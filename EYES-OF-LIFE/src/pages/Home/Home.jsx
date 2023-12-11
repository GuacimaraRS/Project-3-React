import React from "react";
import logoImage from "../../assets/images/eyes_of_life.png";
import "./Home.css";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Bienvenidos a</h1>
        <h1>EYES OF LIFE</h1>

        <p>Descubre cosas increíbles aquí.</p>
      </div>
    </>
  );
};

export default Home;
