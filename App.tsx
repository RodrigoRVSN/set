import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Home } from './src/Home'
import { Container } from './src/Home/styles'

export default function App() {
  return (
    <Container>
      <GestureHandlerRootView>
        <Home />
        <StatusBar style='auto' />
      </GestureHandlerRootView>
    </Container>
  )
}
