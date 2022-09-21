import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../views/SignIn'
import Welcome from '../views/Welcome'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
