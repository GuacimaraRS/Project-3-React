import React from 'react';
import './MyEvents.css'; 
import { Link } from 'react-router-dom';
import Pgboda from '../../assets/images/Pgboda.jpg';
import Pgcumple from '../../assets/images/Pgcumple.jpeg';
import Pgbautizo from '../../assets/images/Pgbautizo.jpeg';
import Pgcomunion from '../../assets/images/Pgcomunion.webp';
import Pgempresa from '../../assets/images/Pgempresa.jpg';
import Pgbebes from '../../assets/images/Pgbebes.webp';

const MyEvents = () => {
  return (
    <div className="evento-container">
      <Link to="/events-boda" className="evento">
        <h2>Bodas</h2>
        <img src={Pgboda} alt="Boda" />
        <div className="hover-text">Haz click aquí</div>
      </Link>

      <Link to="/events-cumpleaños" className="evento">
        <h2>Cumpleaños</h2>
        <img src={Pgcumple} alt="Cumpleaños" />
        <div className="hover-text">Haz click aquí</div>
      </Link>

      <Link to="/events-bautizo" className="evento">
        <h2>Bautizos</h2>
        <img src={Pgbautizo} alt="Bautizo" />
        <div className="hover-text">Haz click aquí</div>
      </Link>

      <Link to="/events-comuniones" className="evento">
        <h2>Comuniones</h2>
        <img src={Pgcomunion} alt="Comuniones" />
        <div className="hover-text">Haz click aquí</div>
      </Link>

      <Link to="/events-empresa" className="evento">
        <h2>Empresas</h2>
        <img src={Pgempresa} alt="Empresa" />
        <div className="hover-text">Haz click aquí</div>
      </Link>

      <Link to="/events-bebes" className="evento">
        <h2>Bebés</h2>
        <img src={Pgbebes} alt="Bebés" />
        <div className="hover-text">Haz click aquí</div>
      </Link>
    </div>
  );
};

export default MyEvents;