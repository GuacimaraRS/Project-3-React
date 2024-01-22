
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ReservarCitas.css'

function ReservarCitas() {  

  const navigate = useNavigate();

  const handleGaleryClick = (photographer) => {
    navigate(`/photographers/${photographer}/galery`);
  };

  const handleReservaClick = (photographer) => {
    navigate(`/photographers/${photographer}/reservar`);
  };

  const handleEventClick = (photographer) => {
    navigate(`/photographers/${photographer}/event`);
  };

  const location = useLocation();
  const { name } = location.state || { name: "" };

  const [formName, setFormName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(name.split(" ")[0]);
  const [selectedPack, setSelectedPack] = useState(name.split(" ")[1])
 

  const handleSubmit = () => {
    alert("Cita Guardada")
  };


  return (
    <>
    <h1 className='reservas2'>Reservar Citas</h1>
    <div className="button-container">
        <button className="button-PhotoGrapher" onClick={handleGaleryClick}>Galeria</button>
        <button className="button-PhotoGrapher" onClick={handleEventClick}>Eventos</button>
        <button className="button-PhotoGrapher" onClick={handleReservaClick}>Reservar</button>
        <Link className="button-Back" to="#" onClick={() => window.history.back()}>Volver</Link>
      </div>

  <div className="my-dates-container2">
          <div className="form-group-calendar2">
            <h3 className='calendario'>Calendario:</h3>
            <Calendar 
              onChange={(date) => setSelectedDate(date)}
              value={selectedDate}
            />
            </div>
    <div className="appointment-form2">
        <div className="form-group2">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
          />
        </div>
            
        <div className="form-group2">
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
  
        <div className="form-group2">
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
  
        <div className="form-group2">
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
        <button className='buttonReserva2' type="button" onClick={handleSubmit}>
          Reservar Cita  
        </button>
        </div>
        </div>
      </div>
     </>
)
}


export default ReservarCitas