import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import './MyDates.css';

const MyDates = () => {
  const location = useLocation();
  const { name } = location.state || { name: "" };

  const [formName, setFormName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(name.split(" ")[0]);
  const [selectedPack, setSelectedPack] = useState(name.split(" ")[1])
  const [appointments, setAppointments] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendarVisibility = () => {
    setCalendarVisible(!calendarVisible);
  };
  const handleSubmit = () => {
    const newAppointment = {
      name: formName,
      date: selectedDate,
      time: selectedTime,
      event: selectedEvent,
      pack: selectedPack,
    };

    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    updateLocalCalendar([...appointments, newAppointment]);
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

  const resetForm = () => {
    setFormName('');
    setSelectedTime('');
    setSelectedEvent('');
    setSelectedPack('');
  };

  return (   
  <>  
  <div className="left-section">
  <h1 className='reservas'>Reservar Citas</h1>
  <div className="my-dates-container">

        <button className="toggle-calendar-button" onClick={toggleCalendarVisibility}>
          {calendarVisible ? 'Ocultar Calendario' : 'Mostrar Calendario'}
        </button>
        {calendarVisible && (
          <div className="form-group-calendar">
            <h3 className='calendario'>Calendario:</h3>
            <Calendar
              onChange={(date) => setSelectedDate(date)}
              value={selectedDate}
            />
          </div>
        )}
    
    <div className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
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
            {[ '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00'].map((hour) => (
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
            <option value="Estándar">Estándar</option>
            <option value="Premium">Premium</option>
            <option value="Deluxe">Deluxe</option>
          </select>
        </div>
        <div>
        <button className='buttonReserva' type="button" onClick={handleSubmit}>
          Reservar Cita
        </button>
        </div>
        </div>
      </div>
      </div>
   <div className="right-section">
    <div className='tableReservas'>
     <h1 className='citas'>Citas Reservadas</h1>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Hora</th>
            <th>Evento</th>
            <th>Pack</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.name}</td>
              <td>{appointment.time}</td>
              <td>{appointment.event}</td>
              <td>{appointment.pack}</td>
              <td>
                <button type="button" onClick={() => handleDelete(index)}>
                  Eliminar Reserva
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};

export default MyDates;