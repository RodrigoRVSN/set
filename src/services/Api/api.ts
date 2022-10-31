import axios from "axios";

const api = axios.create({
  baseURL: 'https://set-api-production.up.railway.app'
})

export default api