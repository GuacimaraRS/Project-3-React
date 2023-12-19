import api from "./config"

const getProfilePhotographer = async () => {
    try {
      const { data } = await api.get('/photographer/profile', {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      return data
    } catch (error) {
      console.log(error)
    }
  } 
export { getProfilePhotographer };