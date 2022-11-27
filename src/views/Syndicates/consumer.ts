import api from "../../services/Api/api";

export const syndicates = {
  get: async () => {
    try {
      const response = await api.get('/syndicates')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}