import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyDatesUser = () => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('Boda');
  const [selectedPack, setSelectedPack] = useState('Boda deluxe');
  const [appointments, setAppointments] = useState({});
  const [userId, setUserId] = useState(''); // Puedes obtener esto de la autenticación del usuario

  useEffect(() => {
    const userAppointmentsKey = `appointments_${userId}`;
    const storedAppointments = JSON.parse(localStorage.getItem(userAppointmentsKey)) || {};
    setAppointments(storedAppointments);
  }, [userId]);

  const handleSubmit = () => {
    const userAppointmentsKey = `appointments_${userId}`;
    const newAppointmentKey = `${selectedDate.toISOString()}-${selectedTime}`;
    const newAppointment = {
      name,
      date: selectedDate,
      time: selectedTime,
      event: selectedEvent,
      pack: selectedPack,
    };

    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [newAppointmentKey]: newAppointment,
    }));

    updateLocalCalendar(
      { ...appointments, [newAppointmentKey]: newAppointment },
      userAppointmentsKey
    );

    setName('');
    setSelectedTime('');
    setSelectedEvent('Boda');
    setSelectedPack('Boda deluxe');
  };

  const handleDelete = (key) => {
    const updatedAppointments = { ...appointments };
    delete updatedAppointments[key];
    setAppointments(updatedAppointments);
    updateLocalCalendar(updatedAppointments, `appointments_${userId}`);
  };

  const updateLocalCalendar = (appointments, userAppointmentsKey) => {
    localStorage.setItem(userAppointmentsKey, JSON.stringify(appointments));
  };

  return (
    <div className="my-dates-container">
      <div className="appointment-form">
        <h2>Reservar Cita</h2>
        <div className="form-group">
          {/* Resto del formulario */}
        </div>
        <button type="button" onClick={handleSubmit}>
          Reservar Cita
        </button>
      </div>

      <div className="divider" />

      <div className="citas-reservadas">
        <h2>Citas Reservadas</h2>
        {Object.entries(appointments).map(([key, appointment]) => (
          <div key={key} className="appointment">
            {/* Mostrar detalles de la cita */}
            <button type="button" onClick={() => handleDelete(key)}>
              Eliminar Reserva
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDatesUser;
