import api from "./config"


const  getAllReservations= async () => {
    try {
      const{ data} = await api.get('/reservation', {
        headers: {
          authorization: localStorage.getItem("token")
        }
        });
      return data;
    } catch (error) {
      console.error('Error al obtener reservas:', error);
      throw error;
    }
  }


export {
  getAllReservations
}