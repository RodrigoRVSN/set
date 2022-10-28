import api from "../Api/api";
import { SignUpType } from "./auth.types";

export async function signIn (email: string, password: string) {
  try {
    const response = await api.post('/user/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function signUp (body: SignUpType) {
  try {
    const { data } = await api.post('/user/register', body);
    return data;
  } catch (error) {
    console.log(error);
  }
}
