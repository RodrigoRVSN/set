import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { AuthProvider } from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38A69D' barStyle='light-content' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
