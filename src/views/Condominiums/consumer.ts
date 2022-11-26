import api from "../../services/Api/api";

export const condominiums = {
  get: async () => {
    try {
      const response = await api.get('/condominium')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}