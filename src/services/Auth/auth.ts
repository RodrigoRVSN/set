import api from "../Api/api";

export async function signIn (email, password) {
    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }