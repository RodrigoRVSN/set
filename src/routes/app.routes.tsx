import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../views/Dashboard";
import Menu from "../views/Menu";

const AppStack = createNativeStackNavigator()

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='Menu' options={{ headerShown: false }} component={Menu} />
  </AppStack.Navigator>
)

export default AppRoutes
