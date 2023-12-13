import React from "react";
import logoImage from "../../assets/images/eyes_of_life.png";
import Elvis4 from "../../assets/images/Elvis4.jpg";
import Elvis3 from "../../assets/images/Elvis3.jpg";
import Elvis2 from "../../assets/images/Elvis2.jpg";
import Elvis1 from "../../assets/images/Elvis1.jpg";
import "./Home.css";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="welcome-container">
          <h3 className="line-under">Bienvenidos a</h3>
          <h1 className="line-under">EYES OF LIFE</h1>
          <img src={logoImage} alt="Logo de Eyes of Life" className="eyes-of-life-logo" />
        </div>
        <div className="eyes-of-life-container">
          <h2>Captura la perfección </h2>
          <p>Fotografía adaptada a tus necesidades</p>
          <p>Crea tus categorías y eventos personales</p>
          <p>Tus objetivos reflejados</p>
          <p>Descubre cosas increíbles aquí.</p>
          <h3>Comienza ahora</h3>
        </div>
        <div className="galleries-container">
          <h2>Galerías de Impacto</h2>
       <div className="images-container">
        <div className="column">
          <img src={Elvis4} alt="Galería de Elvis" />
          <img src={Elvis1} alt="Galería de Elvis" />
        </div>
        <div className="column">
        <img src={Elvis2} alt="Galería de Elvis" />
        <img src={Elvis3} alt="Galería de Elvis" />
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Home;
