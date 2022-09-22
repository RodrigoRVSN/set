import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../views/SignIn";
import Welcome from "../views/Welcome";

const AuthStack = createNativeStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
    <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
  </AuthStack.Navigator>
)

export default AuthRoutes
