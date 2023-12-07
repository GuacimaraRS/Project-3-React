import api from "./config";


const getUser = async () => {
    try {
        const result = await api.get('/users')
        return result
    } catch (error) {
        throw new Error(error)
    }
}


export { getUser }