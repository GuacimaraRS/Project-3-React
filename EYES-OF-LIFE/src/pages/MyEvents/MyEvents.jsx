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
        <div className="evento">
        <h2>Bodas</h2>
        <img src={Pgboda} alt="Boda" />

          <Link to="/events-boda" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
        <h2>Bodas</h2>
          <img src={Pgcumple} alt="Cumpleaños" />
          <Link to="/events-cumpleaños" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
        <h2>Bautizos</h2>
          <img src={Pgbautizo} alt="Bautizo" />
          
          <Link to="/events-bautizo" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>
      

      
        <div className="evento">
        <h2>Comuniones</h2>
          <img src={Pgcomunion} alt="Comuniones" />
          
          <Link to="/events-comuniones" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
        <h2>Empresas</h2>
          <img src={Pgempresa} alt="Empresa" />
          
          <Link to="/events-empresa" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>

        <div className="evento">
        <h2>Bebés</h2>
          <img src={Pgbebes} alt="Bebés" />
          <Link to="/events-bebes" className="ver-galeria">
            Click aquí para ver galería
          </Link>
        </div>
      
    </div>
  );
};

export default MyEvents;