import React from 'react';
import './MyEvents.css'; 
import { Link } from 'react-router-dom';
import EventImage from '../../components/EventImage/EventImage';
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
        <EventImage image={Pgboda} title="Bodas" />
      </Link>

      <Link to="/events-cumpleaños" className="evento">
        <EventImage image={Pgcumple} title="Cumpleaños" />
      </Link>

      <Link to="/events-bautizo" className="evento">
        <EventImage image={Pgbautizo} title="Bautizos" />
      </Link>

      <Link to="/events-comuniones" className="evento">
        <EventImage image={Pgcomunion} title="Comuniones" />
      </Link>

      <Link to="/events-empresa" className="evento">
        <EventImage image={Pgempresa} title="Empresas" />
      </Link>

      <Link to="/events-bebes" className="evento">
        <EventImage image={Pgbebes} title="Bebés" />
      </Link>
    </div>
  );
};

export default MyEvents;
