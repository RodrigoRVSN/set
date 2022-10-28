import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Welcome from "../views/Welcome";

const AuthStack = createNativeStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name='Welcome' component={Welcome} />
    <AuthStack.Screen name='SignIn' component={SignIn} />
    <AuthStack.Screen name='SignUp' component={SignUp} />
  </AuthStack.Navigator>
)

export default AuthRoutes
