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

  const updateProfilePhotographer = async (body) => {
    try {
      const result = await api.put(`/user/profile`,body,{
        headers: {
          authorization: localStorage.token
        }
      })
      return result.data
    } catch (error) {
      console.error(error);
    }
  }

export { getProfilePhotographer, updateProfilePhotographer };