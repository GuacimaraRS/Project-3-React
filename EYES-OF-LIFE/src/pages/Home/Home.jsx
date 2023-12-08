import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Bienvenido a Mi Aplicación</h1>
        <p>Descubre cosas increíbles aquí.</p>
      </div>
    </>
  );
};

export default Home;
