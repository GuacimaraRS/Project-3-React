import React, { useState } from 'react';
import b from '../../assets/images/b.jpeg';
import bo from '../../assets/images/bo.jpeg';
import bod from '../../assets/images/bod.jpeg';
import boda from '../../assets/images/boda.jpeg';
import Boda from '../../assets/images/Boda.jpg';
import bodas from '../../assets/images/bodas.jpeg';
import BO from '../../assets/images/BO.jpeg';
import './EventsImages.css';

const EventsImages = ({ tipo }) => {
  const imagesByType = {
    'Boda': [
      { image: b },
      { image: bo },
      { image: bod },
      { image: BO },
      { image: boda },
      { image: Boda },
      { image: bodas },
    ],
    'Cumpleaños': ['cumple1.jpg', 'cumple2.jpg', 'cumple3.jpg'],
    'Bautizo': ['bautizo1.jpg', 'bautizo2.jpg', 'bautizo3.jpg'],
    'Comuniones': ['comunion1.jpg', 'comunion2.jpg', 'comunion3.jpg'],
    'Empresa': ['empresa1.jpg', 'empresa2.jpg', 'empresa3.jpg'],
    'Bebes': ['bebes1.jpg', 'bebes2.jpg', 'bebes3.jpg'],
  };

  const images = imagesByType[tipo] || [];
  const imagesPerRow = 3;
  const rowsPerPage = 2;
  const totalImages = images.length;

  const [currentRow, setCurrentRow] = useState(0);
  const [currentRow2, setCurrentRow2] = useState(0);

  const handleNextRow = () => {
    setCurrentRow((prevRow) => (prevRow + 1) % Math.ceil(totalImages / imagesPerRow));
  };

  const handlePrevRow = () => {
    setCurrentRow((prevRow) => (prevRow - 1 + Math.ceil(totalImages / imagesPerRow)) % Math.ceil(totalImages / imagesPerRow));
  };

  const handleNextRow2 = () => {
    setCurrentRow2((prevRow) => (prevRow + 1) % Math.ceil(totalImages / imagesPerRow));
  };

  const handlePrevRow2 = () => {
    setCurrentRow2((prevRow) => (prevRow - 1 + Math.ceil(totalImages / imagesPerRow)) % Math.ceil(totalImages / imagesPerRow));
  };

  const startIndex = currentRow * imagesPerRow;
  const endIndex = Math.min(startIndex + imagesPerRow, totalImages);
  const visibleImages = images.slice(startIndex, endIndex);

  const startIndex2 = currentRow2 * imagesPerRow;
  const endIndex2 = Math.min(startIndex2 + imagesPerRow, totalImages);
  const visibleImages2 = images.slice(startIndex2, endIndex2);

  return (
    <div className="image-events">
      <div className="description-container">
        <h2>Imágenes de Eventos: {tipo}</h2>
      </div>
      <div className="navigation-arrows navigation-arrows-first-row">
        <button onClick={handlePrevRow}>&lt;</button>
        <button onClick={handleNextRow}>&gt;</button>
      </div>
      <div className="image-row">
        {visibleImages.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item.image || item} alt={`${tipo} ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="navigation-arrows navigation-arrows-second-row">
        <button onClick={handlePrevRow2}>&lt;</button>
        <button onClick={handleNextRow2}>&gt;</button>
      </div>
      <div className="image-row">
        {visibleImages2.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item.image || item} alt={`${tipo} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsImages;