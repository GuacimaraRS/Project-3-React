import axios from "axios"

const api = axios.create({
    baseURL: 'https://project-3-db-production.up.railway.app/api',
})

export default api