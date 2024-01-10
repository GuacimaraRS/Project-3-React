import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './MyDatesUser.css';

const MyDatesUser = () => {
  const { photographerId } = useParams();
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointments, setAppointments] = useState({});
  const [userId, setUserId] = useState(''); // Asegúrate de inicializar userId según tu lógica de autenticación
  const [formData, setFormData] = useState({
    name: '',
    selectedDate: new Date(),
    selectedTime: '',
    selectedEvent: 'Boda',
    selectedPack: 'Boda deluxe',
  });

  useEffect(() => {
    // Lógica para obtener y establecer la información del fotógrafo seleccionado
    // Puedes utilizar la información de la URL (params) o realizar una llamada a la API
    // para obtener los detalles del fotógrafo según el photographerId.
    // setSelectedPhotographer(...);
  }, [photographerId]);

  const fetchPhotographerDetails = () => {
    // Lógica para obtener detalles del fotógrafo (puedes usar fetch o axios)
    // y actualizar setSelectedPhotographer con la información.
    // Ejemplo ficticio:
    // fetch(`/api/photographers/${photographerId}`)
    //   .then(response => response.json())
    //   .then(data => setSelectedPhotographer(data));
  };

  useEffect(() => {
    fetchPhotographerDetails();
  }, [photographerId]);

  const handleSearch = () => {
    // Lógica de búsqueda, puedes realizar una llamada a la API aquí
    // con la consulta de búsqueda (searchQuery) y actualizar setSearchResults
    // Ejemplo: setSearchResults([...]); // Actualiza con los resultados de búsqueda
  };

  const handleAppointmentSubmission = () => {
    const userAppointmentsKey = `appointments_${userId}`;
    const newAppointmentKey = `${formData.selectedDate.toISOString()}-${formData.selectedTime}`;
    const newAppointment = {
      name: formData.name,
      date: formData.selectedDate,
      time: formData.selectedTime,
      event: formData.selectedEvent,
      pack: formData.selectedPack,
    };

    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [newAppointmentKey]: newAppointment,
    }));

    updateLocalCalendar({ ...appointments, [newAppointmentKey]: newAppointment }, userAppointmentsKey);

    setFormData({
      name: '',
      selectedDate: new Date(),
      selectedTime: '',
      selectedEvent: 'Boda',
      selectedPack: 'Boda deluxe',
    });
  };

  const handleDeleteAppointment = (key) => {
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
      <div className="citas-reservadas">
        <h2>Citas Reservadas</h2>
        <div className="appointment-table">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Fotógrafo</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((index) => (
                <tr key={index} className="appointment">
                  <td className="table-cell">Fecha {index}</td>
                  <td className="table-cell">Fotógrafo {index}</td>
                  <td className="table-cell">Evento {index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
              }

export default MyDatesUser;