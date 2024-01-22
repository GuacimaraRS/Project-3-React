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
    const { data } = await api.get(`/user/${id}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    return data
  } catch (error) {
    console.error(error);
  }
}

const updateUser = async (body) => {
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

export {
  getProfile,
  getOneUser,
  updateUser
}