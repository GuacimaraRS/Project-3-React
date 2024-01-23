import api from "./config"


const addImagenPhotographer = async (body) => {
    try {
        const { data } = await api.post(`/imagen/${body.galeryId}`,body, {
            headers: {
              authorization: localStorage.token
            }})
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        
    }
}
const getOnePhotographer = async (id) => {
    try {
        const { data } = await api.get(`/user/${id}`, {
            headers: {
              authorization: localStorage.token
            }})
        return data
      } catch (error) {
        console.error(error);
        
    }
}

const getAllPhotographer = async () => {
    try {
        const { data } = await api.get('/user/photographers', {
            headers: {
              authorization: localStorage.token
            }})
        return data
    } catch (error) {
        console.error(error)
        
    }
}

export {
    addImagenPhotographer,
    getOnePhotographer,
    getAllPhotographer
}
