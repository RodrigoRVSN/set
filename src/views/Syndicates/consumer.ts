import api from "../../services/Api/api";
import { syndicateRegisterType } from "./SyndicateRegister";

export const syndicates = {
  get: async () => {
    try {
      const response = await api.get('/syndicates')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  create: async (data: syndicateRegisterType) => {
    try {
      const response = await api.post('/user/register', data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}