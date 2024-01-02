import api from "./config"

const MyDatesApi = {
  getAllReservations: async () => {
    try {
      const response = await api.get('/reservations');
      return response.data;
    } catch (error) {
      console.error('Error al obtener reservas:', error);
      throw error;
    }
  },

  getOneReservation: async (reservationId) => {
    try {
      const response = await api.get(`/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la reserva ${reservationId}:`, error);
      throw error;
    }
  },

  createReservation: async (newReservation) => {
    try {
      const response = await api.post('/reservations', newReservation);
      return response.data;
    } catch (error) {
      console.error('Error al crear reserva:', error);
      throw error;
    }
  },

  updateReservation: async (reservationId, updatedReservation) => {
    try {
      const response = await api.put(`/reservations/${reservationId}`, updatedReservation);
      return response.data;
    } catch (error) {
      console.error(`Error al cargar reserva ${reservationId}:`, error);
      throw error;
    }
  },

  deleteReservation: async (reservationId) => {
    try {
      const response = await api.delete(`/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al e ${reservationId}:`, error);
      throw error;
    }
  },
};

export default MyDatesApi;