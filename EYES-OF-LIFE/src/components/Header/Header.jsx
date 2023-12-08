// AppBar.js
import React from 'react';
import './Header.css';

const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <h1>Nombre de Tu Aplicación</h1>
        <div className="button-container">
          <button className="app-button">Botón 1</button>
          <button className="app-button">Botón 2</button>
          <button className="app-button">Botón 3</button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
