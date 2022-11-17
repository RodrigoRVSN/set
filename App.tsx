import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { AuthProvider } from './src/contexts/auth'
import { commonStyles } from './src/Styles/commonStyles'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={commonStyles.primaryColor} barStyle='light-content' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
