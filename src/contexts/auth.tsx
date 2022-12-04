import React, { createContext, useContext, useEffect, useState } from "react";
import * as auth from '../services/Auth/auth'
import api from "../services/Api/api";

interface AuthContextData {
  signed: boolean,
  user: object | null,
  loading: boolean,
  signIn(email: string, password: string): Promise<void>,
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedUser = await AsyncStorage.getItem('@SETAuth:user')
  //     if (storagedUser) {
  //       setUser(JSON.parse(storagedUser))
  //       setLoading(false)
  //     }

  //   }
  //   loadStorageData()
  // }, [])

  async function signIn(email: string, password: string): Promise<void> {
    try {
      const response = await auth.signIn(email, password)
      setUser(response)

      api.defaults.headers.post['Authorization'] = `Bearer ${response.access_token}`;
      // await AsyncStorage.setItem('@SETAuth:user', JSON.stringify(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  function signOut() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: {}, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}