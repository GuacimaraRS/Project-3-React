import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MyDatesUser.css';

const MyDatesUser = () => {
  const generateRandomData = () => {
    const randomDate = () => new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
    const randomTime = () => new Date().toLocaleTimeString('en-US', { hour12: false });
    const randomPhotographer = () => [ 'Carlos Satana','Airam Artilez','Violeta Cruz','John Doe', 'Jane Smith', 'Alice Johnson'][Math.floor(Math.random() * 3)];
    const randomEvent = () => ['Boda', 'Comunión', 'Bautizo', 'Cumpleaños', ''][Math.floor(Math.random() * 3)];

    return {
      fecha: randomDate().toLocaleDateString(),
      hora: randomTime(),
      fotografo: randomPhotographer(),
      evento: randomEvent(),
    };
  };

  const [data, setData] = useState(Array.from({ length: 3 }, (_, id) => ({ id: id + 1, ...generateRandomData() })));

  const handleEdit = (id) => {
    console.log(`Editar elemento con ID ${id}`);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { id: prevData.length + 1, ...generateRandomData() }]);
  };

  return (
    <div className="my-dates-container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Fotógrafos</th>
            <th>Eventos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
              <td>{item.fotografo}</td>
              <td>{item.evento}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>✎</button>
                <button onClick={() => handleDelete(item.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};

export default MyDatesUser;