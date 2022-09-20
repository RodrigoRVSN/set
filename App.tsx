import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Home } from './src/views/Home'
import { Container } from './src/views/Home/styles'
import SignIn from './src/views/SignIn'

export default function App() {
  return (
    <Container>
      <GestureHandlerRootView>
        <SignIn />
        <StatusBar style='auto' />
      </GestureHandlerRootView>
    </Container>
  )
}
