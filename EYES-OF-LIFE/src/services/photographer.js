import api from "./config"


const addImagenPhotographer = async (body) => {
    try {
        const { data } = await api.post(`/imagen/${body.galeryId}`,body)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        
    }
}

export {
    addImagenPhotographer
}
