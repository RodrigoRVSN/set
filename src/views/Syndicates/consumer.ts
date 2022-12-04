
import api from "../../services/Api/api";
import ISyndicate from "./types";

export const syndicates = {
  get: async () => {
    try {
      const response = await api.get('/syndicates')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  create: async (data: ISyndicate) => {
    try {
      const response = await api.post('/user/register', {...data, role:'SYNDICATE'})
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}