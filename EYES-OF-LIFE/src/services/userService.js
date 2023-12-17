import api from "./config";

const getProfile = async () => {
  try {
    const { data } = await api.get('/user/profile', {
      headers: {
        authorization: localStorage.token
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
} 

const getOneUser = async (id) => {
  try {
    const { data } = await api.get(`/user/${id}`)
    return data
  } catch (error) {
    console.error(error);
  }
}

export {
  getProfile,
  getOneUser
}