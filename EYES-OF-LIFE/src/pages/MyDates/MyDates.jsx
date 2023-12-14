// MyDates.jsx

import React, { useState } from 'react';
import './MyDates.css';

const Calendar = ({ appointments, hours }) => {
  const days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  const renderAppointmentButton = (day, hour) => {
    const key = `${day}-${hour}`;
    const isBooked = appointments[key];

    return (
      <td key={key} className={isBooked ? 'booked' : ''}>
        {isBooked ? hour : ''}
      </td>
    );
  };

  return (
    <div className="calendar">
      <h2>Calendario</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td>{hour}</td>
              {days.map((day) => renderAppointmentButton(day, hour))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MyDates = () => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointments, setAppointments] = useState({});
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = `${selectedDate}-${selectedTime}`;
    const updatedAppointments = { ...appointments, [key]: true };
    setAppointments(updatedAppointments);
    setName('');
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="my-dates-container">
      <div className="appointment-form">
        <h2>Reservar Cita</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />

          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>

          <button type="submit">Reservar Cita</button>
        </form>
      </div>

      <Calendar appointments={appointments} hours={hours} />
    </div>
  );
};

export default MyDates;
