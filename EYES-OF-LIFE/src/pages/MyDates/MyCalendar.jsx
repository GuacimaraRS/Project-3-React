import React from 'react';import './MyDates.css';
 import './MyCalendar.css';
const Calendar = ({ appointments, hours }) => {
  return (
    <div className="calendar">
      <h2>Calendario</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Hora</th>
            {['Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes'].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td>{hour}</td>
              {['Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes'].map((day) => {
                const key = `${day}-${hour}`;
                const isBooked = appointments[key];

                return (
                  <td key={key} className={`calendar-cell ${isBooked ? 'booked' : ''}`}>
                    {isBooked ? 'Reservado' : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;