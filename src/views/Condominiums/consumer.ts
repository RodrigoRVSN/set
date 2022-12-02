import api from "../../services/Api/api";
import { condominiumRegisterType } from "./CondominiumRegister";

export const condominiums = {
  get: async () => {
    try {
      const response = await api.get('/condominium')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  create: async (data: condominiumRegisterType) => {
    try {
      const response = await api.post('/condominium/create', data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}