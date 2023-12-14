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
    <div>
      <div className="evento-container">
        <div className="evento">
        <img src={Pgboda} alt="Boda" />
          <h2>Bodas</h2>
          <Link to="/events-boda" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
          <img src={Pgcumple} alt="Cumpleaños" />
          <h2>Cumpleaños</h2>
          <Link to="/events-cumpleaños" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
          <img src={Pgbautizo} alt="Bautizo" />
          <h2>Bautizos</h2>
          <Link to="/events-bautizo" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>
      </div>

      <div className="evento-container">
        <div className="evento">
          <img src={Pgcomunion} alt="Comuniones" />
          <h2>Comuniones</h2>
          <Link to="/events-comuniones" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
          <img src={Pgempresa} alt="Empresa" />
          <h2>Empresas</h2>
          <Link to="/events-empresa" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
          <img src={Pgbebes} alt="Bebés" />
          <h2>Bebés</h2>
          <Link to="/events-bebes" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;