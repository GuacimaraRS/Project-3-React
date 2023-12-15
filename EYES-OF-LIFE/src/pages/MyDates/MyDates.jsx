import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './MyDates.css';

const MyDates = () => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('Boda'); // Cambiado a 'Boda' como valor predeterminado
  const [selectedPack, setSelectedPack] = useState('Boda deluxe'); // Cambiado a 'Boda deluxe' como valor predeterminado
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleSubmit = () => {
    const newAppointment = {
      name,
      date: selectedDate,
      time: selectedTime,
      event: selectedEvent,
      pack: selectedPack,
    };
    setAppointments([...appointments, newAppointment]);
    updateLocalCalendar([...appointments, newAppointment]);
    setName('');
    setSelectedTime('');
    setSelectedEvent('Boda'); // Restaurar el valor predeterminado para el próximo evento
    setSelectedPack('Boda deluxe'); // Restaurar el valor predeterminado para el próximo pack
  };

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    updateLocalCalendar(updatedAppointments);
  };

  const updateLocalCalendar = (appointments) => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };

  return (
    <div className="my-dates-container">
      <div className="appointment-form">
        <h2>Reservar Cita</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="event">Evento:</label>
          <select
            id="event"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            required
          >
            <option value="Boda">Boda</option>
            <option value="Comunión">Comunión</option>
            <option value="Bautizo">Bautizo</option>
            <option value="Bebé">Bebé</option>
            <option value="Empresa">Empresa</option>
            <option value="Cumpleaños">Cumpleaños</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pack">Pack:</label>
          <select
            id="pack"
            value={selectedPack}
            onChange={(e) => setSelectedPack(e.target.value)}
            required
          >
            <option value="Boda deluxe">Boda deluxe</option>
            <option value="Premium">Premium</option>
            <option value="Deluxe">Deluxe</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>
          Reservar Cita
        </button>
      </div>

      <div className="divider" />

      <div className="citas-reservadas">
        <h2>Citas Reservadas</h2>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment">
            <div>
              <strong>Nombre:</strong> {appointment.name}
            </div>
            <div>
              <strong>Fecha:</strong> {new Date(appointment.date).toLocaleDateString()}
            </div>
            <div>
              <strong>Hora:</strong> {appointment.time}
            </div>
            <div>
              <strong>Evento:</strong> {appointment.event}
            </div>
            <div>
              <strong>Pack:</strong> {appointment.pack}
            </div>
            <div>
              <button type="button" onClick={() => handleDelete(index)}>
                Eliminar Reserva
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDates;