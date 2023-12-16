import React from 'react';

const EventImage = ({ image, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div className="hover-text">Haz click aquí</div>
    </>
  );
};

export default EventImage;
