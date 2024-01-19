import { useState, useEffect } from 'react';
import {getAllReservations } from '../../../services/MyReservations'
import './MyDatesUser.css';

const MyDates = () => {

  const [appointments, setAppointments] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const appoint = await getAllReservations();
        setAppointments(appoint)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  fetchData();
}, []); 


  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };


  return (   
  <>  
  
    <div className='tableReservas2'>
     <h1 className='citas2'>Citas Reservadas</h1>
      <table className="appointment-table2">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Fotógrafo</th>
            <th>Evento</th>
            <th>Pack</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='tabla'>
          {appointments.map((appointment, index) => (
            <tr key={appointment.id}>
              <td>{appointment.day_event}</td>
              <td>{appointment.hour_event}</td>
              <td>Danito</td>
              <td>Boda</td>
              <td>Premium</td>
              <td>
                <button type="button2" onClick={() => handleDelete(index)}>
                  Eliminar Reserva
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default MyDates;