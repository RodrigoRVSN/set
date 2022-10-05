import api from "../Api/api";

export async function signIn (email: string, password: string) {
    try {
      const response = await api.post('/user/login', {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }