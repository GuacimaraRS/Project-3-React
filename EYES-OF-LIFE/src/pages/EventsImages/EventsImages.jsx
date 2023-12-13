import React, { useState } from 'react';
import b from '../../assets/images/b.jpeg';
import bo from '../../assets/images/bo.jpeg';
import bod from '../../assets/images/bod.jpeg';
import boda from '../../assets/images/boda.jpeg';
import Boda from '../../assets/images/Boda.jpg';
import bodas from '../../assets/images/bodas.jpeg';
import './EventsImages.css';

const EventsImages = ({ tipo }) => {
  const imagesByType = {
    'Boda': [
      
      { image: b},
      { image: bo},
      { image: bod},
      { image: boda},
      { image: Boda},
      { image: bodas},
    ],
    
    'Cumpleaños': ['cumple1.jpg', 'cumple2.jpg', 'cumple3.jpg'],
    'Bautizo': ['bautizo1.jpg', 'bautizo2.jpg', 'bautizo3.jpg'],
    'Comuniones': ['comunion1.jpg', 'comunion2.jpg', 'comunion3.jpg'],
    'Empresa': ['empresa1.jpg', 'empresa2.jpg', 'empresa3.jpg'],
    'Bebes': ['bebes1.jpg', 'bebes2.jpg', 'bebes3.jpg'],
  };

  const images = imagesByType[tipo] || [];
  const [currentImageFirstRow, setCurrentImageFirstRow] = useState(0);
  const [currentImageSecondRow, setCurrentImageSecondRow] = useState(0);

  const handleNextFirstRow = () => {
    setCurrentImageFirstRow((prev) => (prev + 1) % firstRow.length);
  };

  const handlePrevFirstRow = () => {
    setCurrentImageFirstRow((prev) => (prev - 1 + firstRow.length) % firstRow.length);
  };

  const handleNextSecondRow = () => {
    setCurrentImageSecondRow((prev) => (prev + 1) % secondRow.length);
  };

  const handlePrevSecondRow = () => {
    setCurrentImageSecondRow((prev) => (prev - 1 + secondRow.length) % secondRow.length);
  };

  const firstRow = images.slice(0, 3);
  const secondRow = images.slice(3, 6);

  return (
    <div>
      <div className="image-events">
        <div className="description-container">
          <h2>Imágenes de Eventos: {tipo}</h2>
        </div>
        <div className="navigation-arrows navigation-arrows-first-row">
          <button onClick={handlePrevFirstRow}>&lt;</button>
          <button onClick={handleNextFirstRow}>&gt;</button>
        </div>
        <div className="image-row">
          {/* Primer fila de imágenes */}
          {firstRow.map((item, index) => (
            <div key={index} className="image-item">
              <p>{item.description}</p>
              <img src={item.image} alt={`${tipo} ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="navigation-arrows navigation-arrows-second-row">
          <button onClick={handlePrevSecondRow}>&lt;</button>
          <button onClick={handleNextSecondRow}>&gt;</button>
        </div>
        <div className="image-row">
          {/* Segunda fila de imágenes */}
          {secondRow.map((item, index) => (
            <div key={index} className="image-item">
              <p>{item.description}</p>
              <img src={item.image} alt={`${tipo} ${index + 4}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsImages;